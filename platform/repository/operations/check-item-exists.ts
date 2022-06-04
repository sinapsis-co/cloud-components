import DynamoDB from 'aws-sdk/clients/dynamodb';
import { ApiError } from '../../handler/api/api-error';
import { CheckItemExistsFunc, Entity, EntityBuilder, EntityRepositoryConfig } from '../interface';

export const checkItemExists = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDB.DocumentClient
): CheckItemExistsFunc<Builder> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    params?: Partial<DynamoDB.DocumentClient.GetItemInput>
  ): Promise<{ exists: boolean; entity?: Entity<Builder> }> => {
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

    if (!Item) return { exists: false };
    return { exists: true, entity: repoConfig.entityDeserialize(Item) };
  };
};
