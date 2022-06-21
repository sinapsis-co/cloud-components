import DynamoDB from 'aws-sdk/clients/dynamodb';
import { ApiError } from '../../handler/api/api-error';
import { dispatchEvent } from '../../integrations/event/dispatch-event';
import { CreateItemFunc, Entity, EntityBuilder, EntityCreate, EntityRepositoryConfig } from '../interface';

export const createItem = <Builder extends EntityBuilder, Omitted extends keyof Builder['body'] = ''>(
  repoConfig: EntityRepositoryConfig<Builder, EntityCreate<Builder, Omitted>>,
  dynamodb: DynamoDB.DocumentClient
): CreateItemFunc<Builder, EntityCreate<Builder, Omitted>> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    entityCreate: EntityCreate<Builder, Omitted>,
    params?: Partial<DynamoDB.DocumentClient.PutItemInput>
  ): Promise<Entity<Builder>> => {
    const item = repoConfig.entitySerialize(key, entityCreate);
    await dynamodb
      .put({
        TableName: repoConfig.tableName,
        Item: item,
        ...params,
      })
      .promise()
      .catch((e) => {
        throw new ApiError(e.code, 500, e.message);
      });

    const entity = repoConfig.entityDeserialize(item);

    if (process.env.AUTO_EVENTS) {
      await dispatchEvent({ name: `app.${repoConfig.repoName}.created`, source: 'app' }, entity);
    }
    return entity;
  };
};
