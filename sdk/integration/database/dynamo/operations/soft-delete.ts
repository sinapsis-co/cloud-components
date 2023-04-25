import { DynamoDBDocumentClient, UpdateCommand, UpdateCommandInput } from '@aws-sdk/lib-dynamodb';
import dayjs from 'dayjs';
import { parseTableName } from '..';

import { PlatformError } from 'error';
import { dispatchEvent } from 'integration/event/dispatch-event';
import { Tracing } from 'tracing';
import * as _interface from '../interface';
import { SoftDeleteItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';
import { updateMapper } from '../update-mapper';

export const softDeleteItem = <Builder extends _interface.EntityBuilder, Table extends TableBuilder = TableBuilder>(
  repoConfig: _interface.RepositoryConfig<Builder, Table>,
  dynamodb: DynamoDBDocumentClient
): SoftDeleteItemFn<Builder> => {
  return async (
    key: _interface.EntityBuilder<Builder>['key'],
    params?: Partial<UpdateCommandInput> & { emitEvent?: boolean; deleteAfter?: _interface.TimeToDelete }
  ): Promise<_interface.Entity<Builder>> => {
    const tableName = process.env[parseTableName(repoConfig.tableName)];
    const serializedKey = repoConfig.keySerialize(key);
    const ttl = params?.deleteAfter || { amount: 30, period: 'days' };
    const mapper = updateMapper<_interface.EntityUpdate<Builder>>({
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

      const entity = repoConfig.entityDeserialize(Attributes as _interface.EntityStore<Builder, Table>);

      if (params?.emitEvent) {
        await dispatchEvent<_interface.RepositoryEvent<Builder>['deleted']>(
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
