import { DynamoDBDocumentClient, UpdateCommand, UpdateCommandInput } from '@aws-sdk/lib-dynamodb';
import { parseTableName } from '..';

import { PlatformError, PlatformFault } from 'error';
import { dispatchEvent } from 'integration/event/dispatch-event';
import { Tracing } from 'tracing';
import {
  Entity,
  EntityBuilder,
  EntityRepositoryConfig,
  EntityStore,
  EntityUpdate,
  RepositoryEvent,
} from '../interface';
import { UpdateItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';
import { updateMapper } from '../update-mapper';

export const updateItem = <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(
  repoConfig: EntityRepositoryConfig<Builder, Table>,
  dynamodb: DynamoDBDocumentClient
): UpdateItemFn<Builder> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    entityUpdate: Partial<EntityUpdate<Builder>>,
    params?: Partial<UpdateCommandInput> & { emitEvent?: boolean }
  ): Promise<Entity<Builder>> => {
    const tableName = process.env[parseTableName(repoConfig.tableName)];
    const serializedKey = repoConfig.keySerialize(key);
    const mapper = updateMapper<EntityUpdate<Builder>>(entityUpdate);

    const cmd = async () => {
      const { Attributes } = await dynamodb
        .send(
          new UpdateCommand({
            TableName: tableName,
            Key: serializedKey,
            ReturnValues: 'ALL_NEW',
            ...mapper,
            ...params,
          })
        )
        .catch((e) => {
          throw new PlatformFault({ code: 'FAULT_DYN_UPDATE_ITEM', detail: e.message });
        });

      if (!Attributes) throw new PlatformError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });

      const entity: Entity<Builder> = repoConfig.entityDeserialize(Attributes as EntityStore<Builder, Table>);

      if (params?.emitEvent) {
        await dispatchEvent<RepositoryEvent<Builder>['updated']>(
          { name: `app.${repoConfig.repoName}.updated`, source: 'app' },
          entity
        );
      }

      return entity;
    };

    const meta = { tableName, rawKey: key, serializedKey, mapper, params };
    return Tracing.capture('updateItem', 'FAULT_DYN_SOFT_DELETE_ITEM', JSON.stringify(key), cmd, meta);
  };
};
