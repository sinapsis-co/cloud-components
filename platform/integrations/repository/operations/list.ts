import { DynamoDBDocumentClient, QueryCommand, QueryCommandInput } from '@aws-sdk/lib-dynamodb';
import { parseTableName } from '..';
import { PaginatedResponse } from '../../../catalog/api';
import { PlatformFault } from '../../../error';
import { decodeLastEvaluatedKey, encodeLastEvaluatedKey } from '../../../util/pagination';
import { Entity, EntityBuilder, EntityRepositoryConfig, EntityStore } from '../interface';
import { ListItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';

export const listItem = <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(
  repoConfig: EntityRepositoryConfig<Builder, Table>,
  dynamodb: DynamoDBDocumentClient
): ListItemFn<Builder> => {
  return async (
    pk: string,
    queryParams: { limit: number; nextToken?: string },
    params?: Partial<QueryCommandInput>
  ): Promise<PaginatedResponse<Entity<Builder>>> => {
    const TableName = process.env[parseTableName(repoConfig.tableName)];
    const { Items, LastEvaluatedKey } = await dynamodb
      .send(
        new QueryCommand({
          TableName,
          KeyConditionExpression: '#pk = :pk',
          ExpressionAttributeNames: { '#pk': 'pk' },
          ExpressionAttributeValues: { ':pk': pk },
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
