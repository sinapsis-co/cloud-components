import { DynamoDBDocumentClient, QueryCommand, QueryCommandInput } from '@aws-sdk/lib-dynamodb';
import { parseTableName } from '..';
import { PaginatedResponse } from '../../../catalog/api';
import { PlatformFault } from '../../../error';
import { decodeLastEvaluatedKey, encodeLastEvaluatedKey } from '../../../util/pagination';
import { Entity, EntityBuilder, EntityRepositoryConfig, EntityStore } from '../interface';
import { ListIndexFn, valueof } from '../op-interface';
import { TableBuilder } from '../table-builder';

export const listIndex = <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(
  repoConfig: EntityRepositoryConfig<Builder, Table>,
  dynamodb: DynamoDBDocumentClient
): ListIndexFn<Builder, Table> => {
  return async (
    index: valueof<Table['indexes']>,
    queryParams: { limit: number; nextToken?: string },
    params?: Partial<QueryCommandInput>
  ): Promise<PaginatedResponse<Entity<Builder>>> => {
    const TableName = process.env[parseTableName(repoConfig.tableName)];
    const { Items, LastEvaluatedKey } = await dynamodb
      .send(
        new QueryCommand({
          TableName,
          IndexName: index as string,
          ExclusiveStartKey: decodeLastEvaluatedKey(queryParams.nextToken),
          Limit: queryParams.limit,
          ...params,
        })
      )
      .catch((e) => {
        throw new PlatformFault({ code: 'FAULT_DYN_LIST_ITEM', detail: e.message });
      });

    return {
      items: Items ? Items.map((item) => repoConfig.entityDeserialize(item as EntityStore<Builder, Table>)) : [],
      nextToken: encodeLastEvaluatedKey(LastEvaluatedKey),
    };
  };
};
