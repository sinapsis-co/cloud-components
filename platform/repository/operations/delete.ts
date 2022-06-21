import DynamoDB from 'aws-sdk/clients/dynamodb';
import { ApiError } from '../../handler/api/api-error';
import { dispatchEvent } from '../../integrations/event/dispatch-event';
import { DeleteItemFunc, Entity, EntityBuilder, EntityRepositoryConfig } from '../interface';

export const deleteItem = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDB.DocumentClient
): DeleteItemFunc<Builder> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    params?: Partial<DynamoDB.DocumentClient.DeleteItemInput>
  ): Promise<Entity<Builder>> => {
    const { Attributes } = await dynamodb
      .delete({
        TableName: repoConfig.tableName,
        Key: repoConfig.keySerialize(key),
        ReturnValues: 'ALL_OLD',
        ...params,
      })
      .promise()
      .catch((e) => {
        throw new ApiError(e.code, 500, e.message);
      });

    if (!Attributes) throw new ApiError('NotFound', 404);

    const entity = repoConfig.entityDeserialize(Attributes);

    if (process.env.AUTO_EVENTS) {
      await dispatchEvent({ name: `app.${repoConfig.repoName}.delete`, source: 'app' }, entity);
    }

    return entity;
  };
};
