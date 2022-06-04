import DynamoDB from 'aws-sdk/clients/dynamodb';
import { ApiError } from '../../handler/api/api-error';
import { Entity, EntityBuilder, EntityRepositoryConfig, RecoverItemFunc } from '../interface';

export const recoverItem = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDB.DocumentClient
): RecoverItemFunc<Builder> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    params?: Partial<DynamoDB.DocumentClient.GetItemInput>
  ): Promise<Entity<Builder>> => {
    const { Attributes } = await dynamodb
      .update({
        TableName: repoConfig.tableName,
        Key: repoConfig.keySerialize(key),
        ReturnValues: 'ALL_NEW',
        UpdateExpression: 'REMOVE #deleteTTL',
        ExpressionAttributeNames: { '#deleteTTL': 'deleteTTL' },
        ...params,
      })
      .promise()
      .catch((e) => {
        throw new ApiError(e.code, 500, e.message);
      });

    if (!Attributes) throw new ApiError('NotFound', 404);
    return repoConfig.entityDeserialize(Attributes);
  };
};
