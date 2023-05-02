import { DeleteCommand, DeleteCommandInput, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

import { PlatformError } from 'error';
import { dispatchEvent } from 'integration/event/dispatch-event';
import { Entity, EntityBuilder, EntityEvents, EntityStore } from 'model';
import { Tracing } from 'tracing';
import { DeleteItemFn } from '../types/operations';
import { RepositoryConfig } from '../types/repository';
import { TableStoreBuilder } from '../types/table-store-builder';
import { parseTableName } from '../util/parse-name';

export const deleteItem = <Builder extends EntityBuilder, Table extends TableStoreBuilder = TableStoreBuilder>(
  repoConfig: RepositoryConfig<Builder, Table>,
  dynamodb: DynamoDBDocumentClient
): DeleteItemFn<Builder> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    params?: Partial<DeleteCommandInput> & { emitEvent?: boolean }
  ): Promise<Entity<Builder>> => {
    const tableName = process.env[parseTableName(repoConfig.tableName)];
    const serializedKey = repoConfig.keySerialize(key);

    const cmd = async () => {
      const { Attributes } = await dynamodb
        .send(
          new DeleteCommand({
            TableName: tableName,
            Key: serializedKey,
            ReturnValues: 'ALL_OLD',
            ...params,
          })
        )
        .catch((e) => {
          if (e.name === 'ConditionalCheckFailedException')
            throw new PlatformError({ code: 'ERROR_CONDITIONAL_CHECK_FAILED', statusCode: 400 });
          else throw e;
        });

      if (!Attributes) throw new PlatformError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });

      const entity = repoConfig.entityDeserialize(Attributes as EntityStore<Builder, Table>);

      if (params?.emitEvent) {
        await dispatchEvent<EntityEvents<Builder>['deleted']>(
          { name: `app.${repoConfig.repoName}.deleted`, source: 'app' },
          entity
        );
      }

      return entity;
    };

    const meta = { tableName, rawKey: key, serializedKey, params };
    return Tracing.capture('deleteItem', 'FAULT_DYN_DELETE_ITEM', JSON.stringify(key), cmd, meta);
  };
};
