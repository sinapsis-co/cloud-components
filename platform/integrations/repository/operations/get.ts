import { DynamoDBDocumentClient, GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';
import { parseTableName } from '..';
import { PlatformError, PlatformFault } from '../../../error';
import { Entity, EntityBuilder, EntityRepositoryConfig, EntityStore } from '../interface';
import { GetItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';

export const getItem = <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(
  repoConfig: EntityRepositoryConfig<Builder, Table>,
  dynamodb: DynamoDBDocumentClient
): GetItemFn<Builder> => {
  return async (key: EntityBuilder<Builder>['key'], params?: Partial<GetCommandInput>): Promise<Entity<Builder>> => {
    const TableName = process.env[parseTableName(repoConfig.tableName)];
    const { Item } = await dynamodb
      .send(new GetCommand({ TableName, Key: repoConfig.keySerialize(key), ...params }))
      .catch((e) => {
        throw new PlatformFault({ code: 'FAULT_DYN_GET_ITEM', detail: e.message });
      });

    if (!Item) throw new PlatformError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });
    return repoConfig.entityDeserialize(Item as EntityStore<Builder, Table>);
  };
};
