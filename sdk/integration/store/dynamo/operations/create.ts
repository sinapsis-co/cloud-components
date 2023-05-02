import { DynamoDBDocumentClient, PutCommand, PutCommandInput } from '@aws-sdk/lib-dynamodb';

import { PlatformError } from 'error';
import { dispatchEvent } from 'integration/event/dispatch-event';
import { Entity, EntityBuilder, EntityEvents, EntityKey } from 'model';
import { Tracing } from 'tracing';
import { CreateItemFn } from '../types/operations';
import { RepositoryConfig } from '../types/repository';
import { TableStoreBuilder } from '../types/table-store-builder';
import { parseTableName } from '../util/parse-name';

export const createItem = <Builder extends EntityBuilder, Table extends TableStoreBuilder = TableStoreBuilder>(
  repoConfig: RepositoryConfig<Builder, Table>,
  dynamodb: DynamoDBDocumentClient
): CreateItemFn<Builder> => {
  return async (
    key: EntityKey<Builder>,
    body: Builder['body'],
    params?: Partial<PutCommandInput> & { emitEvent?: boolean }
  ): Promise<Entity<Builder>> => {
    const tableName = process.env[parseTableName(repoConfig.tableName)];
    const serializedItem = repoConfig.entitySerialize(key, body);

    const cmd = async () => {
      await dynamodb.send(new PutCommand({ TableName: tableName, Item: serializedItem, ...params })).catch((e) => {
        if (e.name === 'ConditionalCheckFailedException')
          throw new PlatformError({ code: 'ERROR_CONDITIONAL_CHECK_FAILED', statusCode: 400 });
        else throw e;
      });
      const entity = repoConfig.entityDeserialize(serializedItem);
      if (params?.emitEvent) {
        await dispatchEvent<EntityEvents<Builder>['created']>(
          { name: `app.${repoConfig.repoName}.created`, source: 'app' },
          entity
        );
      }
      return entity;
    };

    const meta = { tableName, rawKey: key, serializedItem, params };
    return Tracing.capture('createItem', 'FAULT_DYN_CREATE_ITEM', JSON.stringify(key), cmd, meta);
  };
};
