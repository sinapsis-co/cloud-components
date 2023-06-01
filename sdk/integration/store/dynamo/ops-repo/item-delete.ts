import { DeleteCommand, DeleteCommandInput } from '@aws-sdk/lib-dynamodb';

import { PlatformError } from 'error';
import { dispatchEvent } from 'integration/event/dispatch-event';
import { Model } from 'model';
import { traceableFunction } from 'tracing';
import { RepoOpConfig } from '../types/config';
import { DeleteItemFn } from '../types/ops-repo';
import { TableStoreBuilder } from '../types/table-store-builder';
import { parseTableName } from '../util/parse-name';

export const deleteItem = <T extends TableStoreBuilder, M extends Model>(
  operationConfig: RepoOpConfig<T, M>
): DeleteItemFn<M> => {
  return async (
    key: M['Key'],
    params?: Partial<DeleteCommandInput> & { emitEvent?: boolean }
  ): Promise<M['Entity']> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)];

    const serializedKey = operationConfig.keySerialize(key);

    const cmd = async () => {
      const { Attributes } = await operationConfig.dynamoClient
        .send(
          new DeleteCommand({
            TableName: tableName,
            Key: serializedKey,
            ReturnValues: 'ALL_OLD',
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

    const meta = { tableName, rawKey: key, serializedKey, params };
    return traceableFunction('deleteItem', 'FAULT_DYN_DELETE_ITEM', JSON.stringify(key), cmd, meta);
  };
};
