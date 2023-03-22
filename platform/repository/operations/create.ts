import { DynamoDBDocumentClient, PutCommand, PutCommandInput } from '@aws-sdk/lib-dynamodb';
import { dispatchEvent } from '../../integrations/event/dispatch-event';
import { HandledFault } from '../../util/handled-exception';
import {
  CreateItemFn,
  Entity,
  EntityBuilder,
  EntityCreate,
  EntityRepositoryConfig,
  RepositoryEvent,
} from '../interface';

export const createItem = <Builder extends EntityBuilder, Omitted extends keyof Builder['body'] = ''>(
  repoConfig: EntityRepositoryConfig<Builder, EntityCreate<Builder, Omitted>>,
  dynamodb: DynamoDBDocumentClient
): CreateItemFn<Builder, EntityCreate<Builder, Omitted>> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    entityCreate: EntityCreate<Builder, Omitted>,
    params?: Partial<PutCommandInput>
  ): Promise<Entity<Builder>> => {
    const item = repoConfig.entitySerialize(key, entityCreate);
    await dynamodb
      .send(
        new PutCommand({
          TableName: repoConfig.tableName,
          Item: item,
          ...params,
        })
      )
      .catch((e) => {
        throw new HandledFault({ code: 'FAULT_DYN_CREATE_ITEM', detail: e.message });
      });

    const entity = repoConfig.entityDeserialize(item);

    if (process.env.AUTO_EVENTS) {
      await dispatchEvent<RepositoryEvent<Builder>['created']>(
        { name: `app.${repoConfig.repoName}.created`, source: 'app' },
        entity
      );
    }
    return entity;
  };
};
