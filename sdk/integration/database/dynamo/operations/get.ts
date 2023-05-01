import { DynamoDBDocumentClient, GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';

import { PlatformError } from 'error';
import { Tracing } from 'tracing';
import { parseTableName } from '../repository';
import { Entity, EntityBuilder, EntityStore } from '../types/entity-builder';
import { GetItemFn } from '../types/operations';
import { RepositoryConfig } from '../types/repository';
import { TableBuilder } from '../types/table-builder';

export const getItem = <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(
  repoConfig: RepositoryConfig<Builder, Table>,
  dynamodb: DynamoDBDocumentClient
): GetItemFn<Builder> => {
  return async (key: EntityBuilder<Builder>['key'], params?: Partial<GetCommandInput>): Promise<Entity<Builder>> => {
    const tableName = process.env[parseTableName(repoConfig.tableName)];
    const serializedKey = repoConfig.keySerialize(key);

    const cmd = async () => {
      const { Item } = await dynamodb.send(new GetCommand({ TableName: tableName, Key: serializedKey, ...params }));
      if (!Item) throw new PlatformError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });
      return repoConfig.entityDeserialize(Item as EntityStore<Builder, Table>);
    };

    const meta = { tableName, rawKey: key, serializedKey, params };
    return Tracing.capture('getItem', 'FAULT_DYN_GET_ITEM', JSON.stringify(key), cmd, meta);
  };
};
