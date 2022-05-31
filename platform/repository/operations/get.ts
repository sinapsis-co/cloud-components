import DynamoDB from 'aws-sdk/clients/dynamodb';
import { ApiError } from '../../handler/api/api-error';
import { Entity, EntityBuilder, EntityRepositoryConfig, GetItemFunc } from '../repository-interface';

export const getItem = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDB.DocumentClient
): GetItemFunc<Builder> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    params?: Partial<DynamoDB.DocumentClient.GetItemInput>
  ): Promise<Entity<Builder>> => {
    const { Item } = await dynamodb
      .get({
        TableName: repoConfig.tableName,
        Key: repoConfig.keySerialize(key),
        ...params,
      })
      .promise()
      .catch((e) => {
        throw new ApiError(e.code, 500, e.message);
      });

    if (!Item) throw new ApiError('NotFound', 404);
    return repoConfig.entityDeserialize(Item);
  };
};
