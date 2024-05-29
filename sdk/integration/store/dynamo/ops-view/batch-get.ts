import { BatchGetCommand, BatchGetCommandInput, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { NativeAttributeValue } from '@aws-sdk/util-dynamodb';

import { PlatformFault } from 'error';
import { Model } from 'model';
import { chunkArray } from 'util/chunk-array';
import { wait } from 'util/executers';
import { ViewOpConfig } from '../types/config';
import { BatchGetFn } from '../types/ops-view';
import { TableStoreBuilder } from '../types/table-store-builder';
import { KeysAndAttributes } from '@aws-sdk/client-dynamodb/dist-types/models/models_0';

const batchGetLimit = 100;

export const batchGet = <T extends TableStoreBuilder<any, any, any, any>, M extends Model>(
  operationConfig: ViewOpConfig<T, M>
): BatchGetFn<M, T> => {
  return async (serializedKey: T['keyMapping'][], params?: Omit<KeysAndAttributes, "Keys"> & { AutoRetry?: boolean}): Promise<M['Entity'][] | undefined[]> => {
    const tableName = process.env[operationConfig.dynamoTableNameEnvVar]!;

    const chunk = chunkArray(serializedKey, batchGetLimit);

    const result = await Promise.all(
      chunk.map(async (c): Promise<M['Entity'][] | []> => {
        const RequestItems = { [tableName]: { Keys: c, ...(params ? params : {}) } };
        const response = await call(operationConfig.dynamoClient, RequestItems, tableName, params?.AutoRetry);
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
