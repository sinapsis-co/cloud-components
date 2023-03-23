import { DynamoDBDocumentClient, UpdateCommand, UpdateCommandInput } from '@aws-sdk/lib-dynamodb';
import { PlatformError, PlatformFault } from '../../error';
import { dispatchEvent } from '../../integrations/event/dispatch-event';
import {
  Entity,
  EntityBuilder,
  EntityRepositoryConfig,
  EntityUpdate,
  RepositoryEvent,
  UpdateItemFn,
} from '../interface';
import { updateMapper } from '../update-mapper';

export const updateItem = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDBDocumentClient
): UpdateItemFn<Builder> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    entityUpdate: Partial<EntityUpdate<Builder>>,
    params?: Partial<UpdateCommandInput>
  ): Promise<Entity<Builder>> => {
    const mapper = updateMapper<EntityUpdate<Builder>>(entityUpdate);
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
        throw new PlatformFault({ code: 'FAULT_DYN_UPDATE_ITEM', detail: e.message });
      });

    if (!Attributes) throw new PlatformError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });

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
