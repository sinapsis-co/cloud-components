import { DynamoDBDocumentClient, QueryCommand, QueryCommandInput } from '@aws-sdk/lib-dynamodb';
import { PaginatedResponse } from '../../catalog/api';
import { HandledFault } from '../../util/handled-exception';
import { decodeLastEvaluatedKey, encodeLastEvaluatedKey } from '../../util/pagination';
import { Entity, EntityBuilder, EntityRepositoryConfig, ListItemFn } from '../interface';

export const listItem = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDBDocumentClient
): ListItemFn<Builder> => {
  return async (
    pk: string,
    queryParams: { limit: number; nextToken?: string },
    params?: Partial<QueryCommandInput>
  ): Promise<PaginatedResponse<Entity<Builder>>> => {
    const { Items, LastEvaluatedKey } = await dynamodb
      .send(
        new QueryCommand({
          TableName: repoConfig.tableName,
          KeyConditionExpression: '#pk = :pk',
          ExpressionAttributeNames: { '#pk': 'pk' },
          ExpressionAttributeValues: { ':pk': pk },
          ExclusiveStartKey: decodeLastEvaluatedKey(queryParams.nextToken),
          Limit: queryParams.limit,
          ...params,
        })
      )
      .catch((e) => {
        throw new HandledFault({ code: 'FAULT_DYN_LIST_ITEM', detail: e.message });
      });

    return {
      items: Items ? Items.map((item) => repoConfig.entityDeserialize(item)) : [],
      nextToken: encodeLastEvaluatedKey(LastEvaluatedKey),
    };
  };
};
