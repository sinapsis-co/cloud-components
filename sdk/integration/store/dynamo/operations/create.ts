import { PutCommand, PutCommandInput } from '@aws-sdk/lib-dynamodb';

import { log } from 'console';
import { PlatformError } from 'error';
import { dispatchEvent } from 'integration/event/dispatch-event';
import { Model } from 'model';
import { Tracing } from 'tracing';
import { OperationConfig } from '../types/config';
import { CreateItemFn } from '../types/operations';
import { parseTableName } from '../util/parse-name';

export const createItem = <M extends Model>(operationConfig: OperationConfig<M>): CreateItemFn<M> => {
  return async (
    key: M['Key'],
    body: Omit<M['Body'], 'createdAt' | 'updatedAt'>,
    params?: Partial<PutCommandInput> & { emitEvent?: boolean; allowOverwrite?: boolean }
  ): Promise<M['Entity']> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)];

    const createdAt = new Date().toISOString();
    const updatedAt = new Date().toISOString();

    log('operationConfig', operationConfig);
    const originalEntity: M['Entity'] = { type: operationConfig.type, ...key, ...body, createdAt, updatedAt };

    log('operationConfig.indexSerialize?.(originalEntity)', operationConfig.indexSerialize?.(originalEntity));

    const serializedItem: M['Store'] = {
      ...operationConfig.keySerialize(key),
      ...operationConfig.indexSerialize?.(originalEntity),
      ...originalEntity,
    };

    const ConditionExpression = params?.allowOverwrite ? undefined : 'attribute_not_exists(pk)';

    const cmd = async () => {
      await operationConfig.dynamoClient
        .send(new PutCommand({ TableName: tableName, Item: serializedItem, ConditionExpression, ...params }))
        .catch((e) => {
          if (e.name === 'ConditionalCheckFailedException') {
            if (params?.allowOverwrite == false && params?.ConditionExpression !== undefined) {
              throw new PlatformError({ code: 'ERROR_ALREADY_ITEM_EXISTS', statusCode: 400 });
            }
            throw new PlatformError({ code: 'ERROR_CONDITIONAL_CHECK_FAILED', statusCode: 400 });
          } else throw e;
        });
      const entity = operationConfig.entityDeserialize(serializedItem as unknown as M['Store']);
      if (params?.emitEvent) {
        await dispatchEvent<M['Events']['created']>(
          { name: `app.${operationConfig.type}.created`, source: 'app' },
          entity
        );
      }
      return entity;
    };

    const meta = { tableName, rawKey: key, serializedItem, params };
    return Tracing.capture('createItem', 'FAULT_DYN_CREATE_ITEM', JSON.stringify(key), cmd, meta);
  };
};
