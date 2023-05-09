import { BatchGetCommand, BatchGetCommandInput, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { NativeAttributeValue } from '@aws-sdk/util-dynamodb';

import { PlatformFault } from 'error';
import { Model } from 'model';
import { chunkArray } from 'util/chunk-array';
import { wait } from 'util/executers';
import { OperationConfig } from '../types/config';
import { BatchGetItemFn } from '../types/operations';
import { TableStoreBuilder } from '../types/table-store-builder';
import { parseTableName } from '../util/parse-name';

export type BatchGetItemParams = {
  autoRetry?: true;
  tableName?: string;
};

export const batchGetItem = <T extends TableStoreBuilder, M extends Model>(
  operationConfig: OperationConfig<T, M>,
  params?: BatchGetItemParams
): BatchGetItemFn<M> => {
  return async (keys: M['Key'][]): Promise<M['Entity'][] | undefined[]> => {
    const table: string = process.env[parseTableName(operationConfig.tableName)]!;
    const items = keys.map((k) => operationConfig.keySerialize(k));
    const chunk = chunkArray(items, 100);

    const result = await Promise.all(
      chunk.map(async (c): Promise<M['Entity'][] | []> => {
        const RequestItems = { [table]: { Keys: c } };
        const response = await call(operationConfig.dynamoClient, RequestItems, table, params?.autoRetry);
        return response.map((item) => {
          return operationConfig.entityDeserialize(item as M['Entity']);
        });
      })
    );

    return result.flat();
  };
};

const call = async (
  dynamodb: DynamoDBDocumentClient,
  RequestItems: BatchGetCommandInput['RequestItems'],
  table: string,
  autoRetry?: boolean
): Promise<Record<string, NativeAttributeValue>[]> => {
  const responses: Record<string, NativeAttributeValue>[] = [];
  const { UnprocessedKeys, Responses } = await dynamodb.send(new BatchGetCommand({ RequestItems })).catch((e) => {
    throw new PlatformFault({ code: 'FAULT_DYN_BATCH_GET_ITEM', detail: e.message });
  });
  if (Responses && Responses[table]) responses.push(...Responses[table]);
  if (autoRetry && UnprocessedKeys && UnprocessedKeys[table]) {
    await wait(Math.ceil(Math.random() * 2000));
    responses.push(...(await call(dynamodb, UnprocessedKeys, table)));
  }
  return responses;
};
