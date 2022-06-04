import DynamoDB from 'aws-sdk/clients/dynamodb';
import { ApiError } from '../../handler/api/api-error';
import { PaginatedResponse } from '../../catalog/api';
import { decodeLastEvaluatedKey, encodeLastEvaluatedKey } from '../../util/pagination';
import { Entity, EntityBuilder, EntityRepositoryConfig, ScanTableFunc } from '../interface';

export const scanTable = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDB.DocumentClient
): ScanTableFunc<Builder> => {
  return async (
    queryParams: { limit: number; nextToken?: string },
    params?: Partial<DynamoDB.DocumentClient.QueryInput>
  ): Promise<PaginatedResponse<Entity<Builder>>> => {
    const { Items, LastEvaluatedKey } = await dynamodb
      .scan({
        TableName: repoConfig.tableName,
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
