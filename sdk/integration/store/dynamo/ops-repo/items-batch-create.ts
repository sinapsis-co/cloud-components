import { BatchWriteCommand, BatchWriteCommandInput, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';

import { PlatformFault } from 'error';
import { Model } from 'model';
import { chunkArray } from 'util/chunk-array';
import { wait } from 'util/executers';
import { RepoOpConfig } from '../types/config';
import { BatchCreateItemFn } from '../types/ops-repo';
import { TableStoreBuilder } from '../types/table-store-builder';

export const batchCreateItem = <T extends TableStoreBuilder, M extends Model>(
  operationConfig: RepoOpConfig<T, M>
): BatchCreateItemFn<M> => {
  return async (items: { key: M['Key']; body: M['Body'] }[], autoRetry?: boolean): Promise<M['Entity'][]> => {
    const tableName = process.env[operationConfig.dynamoTableNameEnvVar]!;

    const entities = items.map((e) => ({
      type: operationConfig.type,
      ...operationConfig.keySerialize(e.key),
      ...e.key,
      ...e.body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));

    const chunk = chunkArray(entities, 25);
    await Promise.all(
      chunk.map(async (c): Promise<any> => {
        const RequestItems: BatchWriteCommandInput['RequestItems'] = {
          [tableName]: c.map((Item) => {
            return { PutRequest: { Item } };
          }),
        };
        await call(operationConfig.dynamoClient, RequestItems, tableName, autoRetry);
      })
    );

    return entities.map((i) => operationConfig.entityDeserialize(i));
  };
};

const call = async (
  dynamodb: DynamoDBDocumentClient,
  RequestItems: BatchWriteCommandInput['RequestItems'],
  table: string,
  autoRetry?: boolean
): Promise<void> => {
  const { UnprocessedItems } = await dynamodb.send(new BatchWriteCommand({ RequestItems })).catch((e) => {
    throw new PlatformFault({ code: 'FAULT_DYN_BATCH_CREATE_ITEM', detail: e.message });
  });
  if (autoRetry && UnprocessedItems && UnprocessedItems[table]) {
    await wait(Math.ceil(Math.random() * 2000));
    await call(dynamodb, UnprocessedItems, table, autoRetry);
  }
};
