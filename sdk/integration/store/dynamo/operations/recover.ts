import { DynamoDBDocumentClient, UpdateCommand, UpdateCommandInput } from '@aws-sdk/lib-dynamodb';

import { PlatformError } from 'error';
import { dispatchEvent } from 'integration/event/dispatch-event';
import { Entity, EntityBuilder, EntityEvents, EntityKey, EntityStore } from 'model';
import { Tracing } from 'tracing';
import { RepositoryConfig } from '../types/config';
import { RecoverItemFn } from '../types/operations';
import { TableStoreBuilder } from '../types/table-store-builder';
import { parseTableName } from '../util/parse-name';

export const recoverItem = <Builder extends EntityBuilder, Table extends TableStoreBuilder = TableStoreBuilder>(
  repoConfig: RepositoryConfig<Builder, Table>,
  dynamodb: DynamoDBDocumentClient
): RecoverItemFn<Builder> => {
  return async (
    key: EntityKey<Builder>,
    params?: Partial<UpdateCommandInput> & { emitEvent?: boolean }
  ): Promise<Entity<Builder>> => {
    const tableName = process.env[parseTableName(repoConfig.tableName)];
    const serializedKey = repoConfig.keySerialize(key);

    const cmd = async () => {
      const { Attributes } = await dynamodb
        .send(
          new UpdateCommand({
            TableName: tableName,
            Key: serializedKey,
            ReturnValues: 'ALL_NEW',
            UpdateExpression: 'REMOVE #deleteTTL',
            ExpressionAttributeNames: { '#deleteTTL': 'deleteTTL' },
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
        await dispatchEvent<EntityEvents<Builder>['recovered']>(
          { name: `app.${repoConfig.repoName}.recovered`, source: 'app' },
          entity
        );
      }
      return entity;
    };

    const meta = { tableName, rawKey: key, serializedKey, params };
    return Tracing.capture('recoverItem', 'FAULT_DYN_RECOVER_ITEM', JSON.stringify(key), cmd, meta);
  };
};
