import DynamoDB from 'aws-sdk/clients/dynamodb';
import dayjs from 'dayjs';
import { ApiError } from '../../handler/api/api-error';
import {
  Entity,
  EntityBuilder,
  EntityRepositoryConfig,
  EntityUpdate,
  SoftDeleteItemFunc,
  TimeToDelete,
} from '../repository-interface';
import { updateMapper } from '../update-mapper';

export const softDeleteItem = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDB.DocumentClient
): SoftDeleteItemFunc<Builder> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    params?: Partial<DynamoDB.DocumentClient.UpdateItemInput>,
    deleteAfter?: TimeToDelete
  ): Promise<Entity<Builder>> => {
    const ttl = deleteAfter || { amount: 30, period: 'days' };
    const mapper = updateMapper<EntityUpdate<Builder>>({
      deleteTTL: dayjs().add(ttl.amount, ttl.period).unix(),
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
