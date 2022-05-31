import DynamoDB from 'aws-sdk/clients/dynamodb';
import { PaginatedResponse } from '../../catalog/api/api-interface';
import { ApiError } from '../../handler/api/api-error';
import { decodeLastEvaluatedKey, encodeLastEvaluatedKey } from '../../util/pagination';
import { Entity, EntityBuilder, EntityRepositoryConfig, ListItemFunc } from '../repository-interface';

export const listItem = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDB.DocumentClient
): ListItemFunc<Builder> => {
  return async (
    pk: string,
    queryParams: { limit: number; nextToken?: string },
    params?: Partial<DynamoDB.DocumentClient.QueryInput>
  ): Promise<PaginatedResponse<Entity<Builder>>> => {
    const { Items, LastEvaluatedKey } = await dynamodb
      .query({
        TableName: repoConfig.tableName,
        KeyConditionExpression: '#pk = :pk',
        ExpressionAttributeNames: { '#pk': 'pk' },
        ExpressionAttributeValues: { ':pk': pk },
        ExclusiveStartKey: decodeLastEvaluatedKey(queryParams.nextToken),
        Limit: queryParams.limit,
        ...params,
      })
      .promise()
      .catch((e) => {
        throw new ApiError(e.code, 500, e.message);
      });

    return {
      items: Items ? Items.map((item) => repoConfig.entityDeserialize(item)) : [],
      nextToken: encodeLastEvaluatedKey(LastEvaluatedKey),
    };
  };
};
