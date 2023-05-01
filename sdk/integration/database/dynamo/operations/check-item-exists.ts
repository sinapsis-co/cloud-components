import { DynamoDBDocumentClient, GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';

import { Tracing } from 'tracing';
import { parseTableName } from '../repository';
import { Entity, EntityBuilder, EntityStore } from '../types/entity-builder';
import { CheckItemExistsFn } from '../types/operations';
import { RepositoryConfig } from '../types/repository';
import { TableBuilder } from '../types/table-builder';

export const checkItemExists = <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(
  repoConfig: RepositoryConfig<Builder, Table>,
  dynamodb: DynamoDBDocumentClient
): CheckItemExistsFn<Builder> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    params?: Partial<GetCommandInput>
  ): Promise<{ exists: boolean; entity?: Entity<Builder> }> => {
    const tableName = process.env[parseTableName(repoConfig.tableName)];
    const serializedKey = repoConfig.keySerialize(key);

    const cmd = async () => {
      const { Item } = await dynamodb.send(new GetCommand({ TableName: tableName, Key: serializedKey, ...params }));
      if (!Item) return { exists: false };
      return { exists: true, entity: repoConfig.entityDeserialize(Item as EntityStore<Builder, Table>) };
    };

    const meta = { tableName, rawKey: key, serializedKey, params };
    return Tracing.capture('checkItemExists', 'FAULT_DYN_CHECK_ITEM_EXISTS', JSON.stringify(key), cmd, meta);
  };
};
