import { DynamoDBDocumentClient, GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';
import { parseTableName } from '..';
import { Tracing } from '../../../tracing';
import { Entity, EntityBuilder, EntityRepositoryConfig, EntityStore } from '../interface';
import { CheckItemExistsFn } from '../op-interface';
import { TableBuilder } from '../table-builder';

export const checkItemExists = <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(
  repoConfig: EntityRepositoryConfig<Builder, Table>,
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
