import { DynamoDBDocumentClient, GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';
import { parseTableName } from '..';
import { PlatformError } from '../../../error';
import { uuid } from '../../../lib/uuid';
import { debug } from '../../../logger';
import { Tracing } from '../../../tracing';
import { Entity, EntityBuilder, EntityRepositoryConfig, EntityStore } from '../interface';
import { GetItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';

export const getItem = <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(
  repoConfig: EntityRepositoryConfig<Builder, Table>,
  dynamodb: DynamoDBDocumentClient
): GetItemFn<Builder> => {
  return async (key: EntityBuilder<Builder>['key'], params?: Partial<GetCommandInput>): Promise<Entity<Builder>> => {
    const op = 'getItem';
    const cmd = async () => {
      const tableName = process.env[parseTableName(repoConfig.tableName)];
      const serializedKey = repoConfig.keySerialize(key);
      const id = uuid();
      debug({ op, phase: 'input', id, tableName, rawKey: key, serializedKey, params });
      const { Item } = await dynamodb.send(new GetCommand({ TableName: tableName, Key: serializedKey, ...params }));
      if (!Item) throw new PlatformError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });
      const entity = repoConfig.entityDeserialize(Item as EntityStore<Builder, Table>);
      debug({ op, phase: 'output', id, entity });
      return entity;
    };
    return Tracing.traceableOp(op, 'FAULT_DYN_GET_ITEM', String(key), cmd);
  };
};
