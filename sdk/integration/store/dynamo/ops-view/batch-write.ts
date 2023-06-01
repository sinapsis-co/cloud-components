import { BatchWriteCommand, BatchWriteCommandInput, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

import { PlatformFault } from 'error';
import { Model } from 'model';
import { traceableFunction } from 'tracing';
import { chunkArray } from 'util/chunk-array';
import { wait } from 'util/executers';
import { ViewOpConfig } from '../types/config';
import { BatchWriteFn } from '../types/ops-view';
import { TableStoreBuilder } from '../types/table-store-builder';
import { parseTableName } from '../util/parse-name';

const batchWriteLimit = 25;

export const batchWrite = <T extends TableStoreBuilder, M extends Model>(
  operationConfig: ViewOpConfig<T, M>
): BatchWriteFn<M> => {
  return async ({ putItems, deleteItems }): Promise<void> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)]!;

    const ops = [
      ...(putItems?.map((i) => {
        return { PutRequest: { Item: i.entity } };
      }) || []),
      ...(deleteItems?.map((i) => {
        return { DeleteRequest: { Key: i.key } };
      }) || []),
    ];

    const chunk = chunkArray(ops, batchWriteLimit);
    const cmd = async () => {
      await Promise.all(chunk.map((c) => call(operationConfig.dynamoClient, { [tableName]: c }, tableName)));
    };
    return traceableFunction('batchCreate', 'FAULT_DYN_BATCH_CREATE_ITEM', 'batch', cmd, { tableName });
  };
};

const call = async (
  dynamodb: DynamoDBDocumentClient,
  RequestItems: BatchWriteCommandInput['RequestItems'],
  tableName: string,
  autoRetry?: boolean
): Promise<void> => {
  const { UnprocessedItems } = await dynamodb.send(new BatchWriteCommand({ RequestItems })).catch((e) => {
    throw new PlatformFault({ code: 'FAULT_DYN_BATCH_CREATE_ITEM', detail: e.message });
  });
  if (autoRetry && UnprocessedItems && UnprocessedItems[tableName]) {
    await wait(Math.ceil(Math.random() * 2000));
    await call(dynamodb, UnprocessedItems, tableName, autoRetry);
  }
};
