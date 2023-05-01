import { DynamoDBDocumentClient, UpdateCommand, UpdateCommandInput } from '@aws-sdk/lib-dynamodb';
import dayjs from 'dayjs';

import { PlatformError } from 'error';
import { dispatchEvent } from 'integration/event/dispatch-event';
import { Tracing } from 'tracing';
import { parseTableName } from '../repository';
import { Entity, EntityBuilder, EntityStore, EntityUpdate } from '../types/entity-builder';
import { SoftDeleteItemFn } from '../types/operations';
import { RepositoryConfig, RepositoryEvent } from '../types/repository';
import { TableBuilder } from '../types/table-builder';
import { updateMapper } from '../util/update-mapper';

export type TimeToDelete = {
  amount: number;
  period: dayjs.ManipulateType;
};

export const softDeleteItem = <EBuilder extends EntityBuilder, TBuilder extends TableBuilder = TableBuilder>(
  repoConfig: RepositoryConfig<EBuilder, TBuilder>,
  dynamodb: DynamoDBDocumentClient
): SoftDeleteItemFn<EBuilder> => {
  return async (
    key: EntityBuilder<EBuilder>['key'],
    params?: Partial<UpdateCommandInput> & { emitEvent?: boolean; deleteAfter?: TimeToDelete }
  ): Promise<Entity<EBuilder>> => {
    const tableName = process.env[parseTableName(repoConfig.tableName)];
    const serializedKey = repoConfig.keySerialize(key);
    const ttl = params?.deleteAfter || { amount: 30, period: 'days' };
    const mapper = updateMapper<EntityUpdate<EBuilder>>({
      deleted: true,
      deleteTTL: dayjs().add(ttl.amount, ttl.period).unix(),
    });

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
          if (e.name === 'ConditionalCheckFailedException')
            throw new PlatformError({ code: 'ERROR_CONDITIONAL_CHECK_FAILED', statusCode: 400 });
          else throw e;
        });

      if (!Attributes) throw new PlatformError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });

      const entity = repoConfig.entityDeserialize(Attributes as EntityStore<EBuilder, TBuilder>);

      if (params?.emitEvent) {
        await dispatchEvent<RepositoryEvent<EBuilder>['deleted']>(
          { name: `app.${repoConfig.repoName}.deleted`, source: 'app' },
          entity
        );
      }

      return entity;
    };

    const meta = { tableName, rawKey: key, serializedKey, ttl, mapper, params };
    return Tracing.capture('softDeleteItem', 'FAULT_DYN_SOFT_DELETE_ITEM', JSON.stringify(key), cmd, meta);
  };
};
