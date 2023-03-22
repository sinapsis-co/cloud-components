import { DynamoDBDocumentClient, UpdateCommand, UpdateCommandInput } from '@aws-sdk/lib-dynamodb';
import dayjs from 'dayjs';
import { HandledError, HandledFault } from '../../util/handled-exception';
import {
  Entity,
  EntityBuilder,
  EntityRepositoryConfig,
  EntityUpdate,
  SoftDeleteItemFn,
  TimeToDelete,
} from '../interface';
import { updateMapper } from '../update-mapper';

export const softDeleteItem = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDBDocumentClient
): SoftDeleteItemFn<Builder> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    params?: Partial<UpdateCommandInput>,
    deleteAfter?: TimeToDelete
  ): Promise<Entity<Builder>> => {
    const ttl = deleteAfter || { amount: 30, period: 'days' };
    const mapper = updateMapper<EntityUpdate<Builder>>({
      deleteTTL: dayjs().add(ttl.amount, ttl.period).unix(),
    });

    const { Attributes } = await dynamodb
      .send(
        new UpdateCommand({
          TableName: repoConfig.tableName,
          Key: repoConfig.keySerialize(key),
          ReturnValues: 'ALL_NEW',
          ...mapper,
          ...params,
        })
      )
      .catch((e) => {
        throw new HandledFault({ code: 'FAULT_DYN_SOFT_DELETE_ITEM', detail: e.message });
      });

    if (!Attributes) throw new HandledError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });
    return repoConfig.entityDeserialize(Attributes);
  };
};
