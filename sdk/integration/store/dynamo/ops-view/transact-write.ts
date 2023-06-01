import { TransactWriteCommand, TransactWriteCommandInput } from '@aws-sdk/lib-dynamodb';

import { PlatformError, PlatformFault } from 'error';
import { Model } from 'model';
import { traceableFunction } from 'tracing';
import { chunkArray } from 'util/chunk-array';
import { ViewOpConfig } from '../types/config';
import { TransactWriteFn } from '../types/ops-view';
import { TableStoreBuilder } from '../types/table-store-builder';
import { parseTableName } from '../util/parse-name';
import { updateMapper } from '../util/update-mapper';

const transactionBatchLimit = 100;

export const transactWrite = <T extends TableStoreBuilder, M extends Model>(
  operationConfig: ViewOpConfig<T, M>
): TransactWriteFn<M> => {
  return async ({ putItems, deleteItems, updateItems, conditionCheck }): Promise<void> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)]!;

    // Check if there are more than 100 operations with condition check
    const ops = [
      ...(conditionCheck
        ? [
            {
              ConditionCheck: {
                TableName: tableName,
                Key: conditionCheck.key,
                ConditionExpression: conditionCheck?.ConditionExpression,
                ...conditionCheck.params,
              },
            },
          ]
        : []),
      ...(putItems?.map((i) => {
        return { Put: { TableName: tableName, Item: i.entity, ...i.params } };
      }) || []),
      ...(updateItems?.map((i) => {
        return {
          Update: {
            TableName: tableName,
            Key: i.key,
            ...updateMapper(i.body),
            ...i.params,
          },
        };
      }) || []),
      ...(deleteItems?.map((i) => {
        return { Delete: { TableName: tableName, Key: i.key, ...i.params } };
      }) || []),
    ];
    if (ops.length > transactionBatchLimit) {
      // const withConditions = arr.find((i) => i.ConditionExpression);
      if (conditionCheck) {
        throw new PlatformFault({
          code: 'FAULT_DYN_TRANSACT_WRITE',
          detail: 'Condition check cannot be used with more than 100 operations',
        });
      }
    }
    const chunk = chunkArray(ops, transactionBatchLimit);
    const cmd = async () => {
      await Promise.all(chunk.map((c) => call(operationConfig, c)));
    };
    return traceableFunction('transactWrite', 'FAULT_DYN_TRANSACT_WRITE', 'batch', cmd, { tableName });
  };
};

const call = async <T extends TableStoreBuilder, M extends Model>(
  operationConfig: ViewOpConfig<T, M>,
  TransactItems: TransactWriteCommandInput['TransactItems']
): Promise<void> => {
  await operationConfig.dynamoClient.send(new TransactWriteCommand({ TransactItems })).catch((e) => {
    if (!e.CancellationReasons || !e.CancellationReasons.length) throw e;
    const checksFailed: Record<number, string> = {};
    for (let index = 0; index < e.CancellationReasons.length; index++) {
      const element = e.CancellationReasons[index];
      if (element.Code === 'ConditionalCheckFailed') checksFailed[index] = element.Message;
    }
    if (Object.keys(checksFailed).length > 0) {
      throw new PlatformError({
        code: 'ERROR_CONDITIONAL_CHECK_FAILED',
        statusCode: 400,
        detail: JSON.stringify(checksFailed),
      });
    } else
      throw new PlatformFault({
        code: 'FAULT_DYN_TRANSACT_WRITE',
        detail: JSON.stringify(e.CancellationReasons),
      });
  });
};
