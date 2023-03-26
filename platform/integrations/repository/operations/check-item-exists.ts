import { DynamoDBDocumentClient, GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';
import { parseTableName } from '..';
import { PlatformFault } from '../../../error';
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
    const TableName = process.env[parseTableName(repoConfig.tableName)];
    const { Item } = await dynamodb
      .send(new GetCommand({ TableName, Key: repoConfig.keySerialize(key), ...params }))
      .catch((e) => {
        throw new PlatformFault({ code: 'FAULT_DYN_CHECK_ITEM_EXISTS', detail: e.message });
      });

    if (!Item) return { exists: false };
    return { exists: true, entity: repoConfig.entityDeserialize(Item as EntityStore<Builder, Table>) };
  };
};
