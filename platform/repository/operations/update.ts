import DynamoDB from 'aws-sdk/clients/dynamodb';
import { ApiError } from '../../handler/api/api-error';
import { dispatchEvent } from '../../integrations/event/dispatch-event';
import {
  Entity,
  EntityBuilder,
  EntityRepositoryConfig,
  EntityUpdate,
  RepositoryEvent,
  UpdateItemFunc,
} from '../interface';
import { updateMapper } from '../update-mapper';

export const updateItem = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDB.DocumentClient
): UpdateItemFunc<Builder> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    entityUpdate: Partial<EntityUpdate<Builder>>,
    params?: Partial<DynamoDB.DocumentClient.UpdateItemInput>
  ): Promise<Entity<Builder>> => {
    const mapper = updateMapper<EntityUpdate<Builder>>(entityUpdate);
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

    const entity: Entity<Builder> = repoConfig.entityDeserialize(Attributes);

    if (process.env.AUTO_EVENTS) {
      await dispatchEvent<RepositoryEvent<Builder>['updated']>(
        { name: `app.${repoConfig.repoName}.updated`, source: 'app' },
        entity
      );
    }

    return entity;
  };
};
