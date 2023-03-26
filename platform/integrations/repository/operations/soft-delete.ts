import { DynamoDBDocumentClient, UpdateCommand, UpdateCommandInput } from '@aws-sdk/lib-dynamodb';
import dayjs from 'dayjs';
import { parseTableName } from '..';
import { PlatformError, PlatformFault } from '../../../error';
import { dispatchEvent } from '../../event/dispatch-event';
import {
  Entity,
  EntityBuilder,
  EntityRepositoryConfig,
  EntityStore,
  EntityUpdate,
  RepositoryEvent,
  TimeToDelete,
} from '../interface';
import { SoftDeleteItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';
import { updateMapper } from '../update-mapper';

export const softDeleteItem = <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(
  repoConfig: EntityRepositoryConfig<Builder, Table>,
  dynamodb: DynamoDBDocumentClient
): SoftDeleteItemFn<Builder> => {
  return async (
    key: EntityBuilder<Builder>['key'],
    params?: Partial<UpdateCommandInput> & { emitEvent?: boolean; deleteAfter?: TimeToDelete }
  ): Promise<Entity<Builder>> => {
    const TableName = process.env[parseTableName(repoConfig.tableName)];
    const ttl = params?.deleteAfter || { amount: 30, period: 'days' };
    const mapper = updateMapper<EntityUpdate<Builder>>({
      deleted: true,
      deleteTTL: dayjs().add(ttl.amount, ttl.period).unix(),
    });

    const { Attributes } = await dynamodb
      .send(
        new UpdateCommand({
          TableName,
          Key: repoConfig.keySerialize(key),
          ReturnValues: 'ALL_NEW',
          ...mapper,
          ...params,
        })
      )
      .catch((e) => {
        throw new PlatformFault({ code: 'FAULT_DYN_SOFT_DELETE_ITEM', detail: e.message });
      });

    if (!Attributes) throw new PlatformError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });

    const entity = repoConfig.entityDeserialize(Attributes as EntityStore<Builder, Table>);

    if (params?.emitEvent) {
      await dispatchEvent<RepositoryEvent<Builder>['deleted']>(
        { name: `app.${repoConfig.repoName}.deleted`, source: 'app' },
        entity
      );
    }

    return entity;
  };
};
