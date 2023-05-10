import { PutCommand, PutCommandInput } from '@aws-sdk/lib-dynamodb';

import { PlatformError } from 'error';
import { dispatchEvent } from 'integration/event/dispatch-event';
import { Model } from 'model';
import { traceableFunction } from 'tracing';
import { OperationConfig } from '../types/config';
import { CreateItemFn } from '../types/operations';
import { TableStoreBuilder } from '../types/table-store-builder';
import { parseTableName } from '../util/parse-name';

export const createItem = <T extends TableStoreBuilder, M extends Model>(
  operationConfig: OperationConfig<T, M>
): CreateItemFn<M> => {
  return async (
    key: M['Key'],
    body: M['Body'],
    params?: Partial<PutCommandInput> & { emitEvent?: boolean; allowOverwrite?: boolean }
  ): Promise<M['Entity']> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)];

    const serializedItem = operationConfig.entitySerialized(key, body);

    const ConditionExpression = params?.allowOverwrite ? undefined : 'attribute_not_exists(PK)';

    const cmd = async () => {
      await operationConfig.dynamoClient
        .send(new PutCommand({ TableName: tableName, Item: serializedItem, ConditionExpression, ...params }))
        .catch((e) => {
          if (e.name === 'ConditionalCheckFailedException') {
            if (!params?.allowOverwrite && !params?.ConditionExpression) {
              throw new PlatformError({ code: 'ERROR_ITEM_ALREADY_EXISTS', statusCode: 400 });
            }
            throw new PlatformError({ code: 'ERROR_CONDITIONAL_CHECK_FAILED', statusCode: 400 });
          } else throw e;
        });
      const entity = operationConfig.entityDeserialize(serializedItem as M['Entity']);
      if (params?.emitEvent) {
        await dispatchEvent<M['Events']['created']>(
          { name: `app.${operationConfig.type}.created`, source: 'app' },
          entity
        );
      }
      return entity;
    };

    const meta = { tableName, rawKey: key, serializedItem, params };
    return traceableFunction('createItem', 'FAULT_DYN_CREATE_ITEM', JSON.stringify(key), cmd, meta);
  };
};
