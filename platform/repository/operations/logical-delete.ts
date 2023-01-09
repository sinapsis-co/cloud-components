import DynamoDB from 'aws-sdk/clients/dynamodb';
import { ApiError } from '../../handler/api/api-error';
import {
  Entity,
  EntityBuilder,
  EntityRepositoryConfig,
  EntityUpdate,
  LogicalDeleteItemFunc,
} from '../interface';
import { updateMapper } from '../update-mapper';

export const logicalDeleteItem = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDB.DocumentClient
): LogicalDeleteItemFunc<Builder> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    params?: Partial<DynamoDB.DocumentClient.UpdateItemInput>,
  ): Promise<Entity<Builder>> => {
    const mapper = updateMapper<EntityUpdate<Builder>>({
      deleted: true
    });

    const { Attributes } = await dynamodb
      .update({
        TableName: repoConfig.tableName,
        Key: repoConfig.keySerialize(key),
        ReturnValues: 'ALL_NEW',
        ...mapper,
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
