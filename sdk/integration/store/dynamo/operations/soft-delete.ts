import { UpdateCommand, UpdateCommandInput } from '@aws-sdk/lib-dynamodb';
import dayjs from 'dayjs';

import { PlatformError } from 'error';
import { dispatchEvent } from 'integration/event/dispatch-event';
import { Model } from 'model';
import { traceableFunction } from 'tracing';
import { OperationConfig } from '../types/config';
import { SoftDeleteItemFn } from '../types/operations';
import { TableStoreBuilder } from '../types/table-store-builder';
import { parseTableName } from '../util/parse-name';
import { updateMapper } from '../util/update-mapper';

export type TimeToDelete = {
  amount: number;
  period: dayjs.ManipulateType;
};

export const softDeleteItem = <T extends TableStoreBuilder, M extends Model>(
  operationConfig: OperationConfig<T, M>
): SoftDeleteItemFn<M> => {
  return async (
    key: M['Key'],
    params?: Partial<UpdateCommandInput> & { emitEvent?: boolean; deleteAfter?: TimeToDelete }
  ): Promise<M['Entity']> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)];
    const serializedKey = operationConfig.keySerialize(key);
    const ttl = params?.deleteAfter || { amount: 30, period: 'days' };
    const mapper = updateMapper({
      deleted: true,
      deleteTTL: dayjs().add(ttl.amount, ttl.period).unix(),
    });

    const cmd = async () => {
      const { Attributes } = await operationConfig.dynamoClient
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

      const entity = operationConfig.entityDeserialize(Attributes as M['Entity']);

      if (params?.emitEvent) {
        await dispatchEvent<M['Events']['deleted']>(
          { name: `app.${operationConfig.type}.deleted`, source: 'app' },
          entity
        );
      }

      return entity;
    };

    const meta = { tableName, rawKey: key, serializedKey, ttl, mapper, params };
    return traceableFunction('softDeleteItem', 'FAULT_DYN_SOFT_DELETE_ITEM', JSON.stringify(key), cmd, meta);
  };
};
