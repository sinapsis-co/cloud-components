import { Put } from '@aws-sdk/client-dynamodb';
import { TransactWriteCommand } from '@aws-sdk/lib-dynamodb';

import { PlatformError, PlatformFault } from 'error';
import { Model } from 'model';
import { traceableFunction } from 'tracing';
import { OperationConfigComposite } from '../types/config';
import { TableStoreBuilder } from '../types/table-store-builder';
import { parseTableName } from '../util/parse-name';

export const transactWrite = <T extends TableStoreBuilder>(operationConfig: OperationConfigComposite<T>): any => {
  return async (items: { entity: Model['Entity']; params?: Omit<Put, 'TableName' | 'Item'> }[]): Promise<void> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)];

    const cmd = async () => {
      await operationConfig.dynamoClient
        .send(
          new TransactWriteCommand({
            TransactItems: items.map((i) => {
              return { Put: { TableName: tableName, Item: i.entity, ...i.params } };
            }),
          })
        )
        .catch((e) => {
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

    const meta = { tableName };
    return traceableFunction('createItem', 'FAULT_DYN_TRANSACT_WRITE', 'batch', cmd, meta);
  };
};
