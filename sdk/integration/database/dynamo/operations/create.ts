import { DynamoDBDocumentClient, PutCommand, PutCommandInput } from '@aws-sdk/lib-dynamodb';

import { dispatchEvent } from 'integration/event/dispatch-event';
import { Tracing } from 'tracing';
import { parseTableName } from '..';
import { Entity, EntityBuilder, EntityCreate, EntityRepositoryConfig, RepositoryEvent } from '../interface';
import { CreateItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';

export const createItem = <
  Builder extends EntityBuilder,
  Table extends TableBuilder = TableBuilder,
  Omitted extends keyof Builder['body'] = ''
>(
  repoConfig: EntityRepositoryConfig<Builder, Table, EntityCreate<Builder, Omitted>>,
  dynamodb: DynamoDBDocumentClient
): CreateItemFn<Builder, EntityCreate<Builder, Omitted>> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    entityCreate: EntityCreate<Builder, Omitted>,
    params?: Partial<PutCommandInput> & { emitEvent?: boolean }
  ): Promise<Entity<Builder>> => {
    const tableName = process.env[parseTableName(repoConfig.tableName)];
    const serializedItem = repoConfig.entitySerialize(key, entityCreate);

    const cmd = async () => {
      await dynamodb.send(new PutCommand({ TableName: tableName, Item: serializedItem, ...params }));
      const entity = repoConfig.entityDeserialize(serializedItem);
      if (params?.emitEvent) {
        await dispatchEvent<RepositoryEvent<Builder>['created']>(
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
