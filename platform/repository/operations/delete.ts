import { DeleteCommand, DeleteCommandInput, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { PlatformError, PlatformFault } from '../../error';
import { dispatchEvent } from '../../integrations/event/dispatch-event';
import { DeleteItemFn, Entity, EntityBuilder, EntityRepositoryConfig, RepositoryEvent } from '../interface';

export const deleteItem = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDBDocumentClient
): DeleteItemFn<Builder> => {
  return async (key: EntityBuilder<Builder>['key'], params?: Partial<DeleteCommandInput>): Promise<Entity<Builder>> => {
    const { Attributes } = await dynamodb
      .send(
        new DeleteCommand({
          TableName: repoConfig.tableName,
          Key: repoConfig.keySerialize(key),
          ReturnValues: 'ALL_OLD',
          ...params,
        })
      )
      .catch((e) => {
        throw new PlatformFault({ code: 'FAULT_DYN_DELETE_ITEM', detail: e.message });
      });

    if (!Attributes) throw new PlatformError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });

    const entity = repoConfig.entityDeserialize(Attributes);

    if (process.env.AUTO_EVENTS) {
      await dispatchEvent<RepositoryEvent<Builder>['deleted']>(
        { name: `app.${repoConfig.repoName}.deleted`, source: 'app' },
        entity
      );
    }

    return entity;
  };
};
