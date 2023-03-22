import { BatchGetCommand, BatchGetCommandInput, DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { NativeAttributeValue } from '@aws-sdk/util-dynamodb';
import { chunkArray } from '../../util/chunk-array';
import { wait } from '../../util/executers';
import { HandledFault } from '../../util/handled-exception';
import { BatchGetItemFn, Entity, EntityBuilder, EntityRepositoryConfig, EntityStore } from '../interface';

export type BatchGetItemParams = {
  autoRetry?: true;
  tableName?: string;
};

export const batchGetItem = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDBDocumentClient,
  params?: BatchGetItemParams
): BatchGetItemFn<Builder> => {
  return async (keys: EntityBuilder<Builder>['key'][]): Promise<Entity<Builder>[] | undefined[]> => {
    const table = params?.tableName || repoConfig.tableName;
    const items = keys.map((k) => repoConfig.keySerialize(k));
    const chunk = chunkArray(items, 100);

    const result = await Promise.all(
      chunk.map(async (c): Promise<Entity<Builder>[] | []> => {
        const RequestItems = {
          [table]: {
            Keys: c,
          },
        };
        const response = await call(dynamodb, RequestItems, table, params?.autoRetry);

        return response.map((item) => {
          return repoConfig.entityDeserialize(item as EntityStore<Builder>);
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
    throw new HandledFault({ code: 'FAULT_DYN_BATCH_GET_ITEM', detail: e.message });
  });
  if (Responses && Responses[table]) responses.push(...Responses[table]);
  if (autoRetry && UnprocessedKeys && UnprocessedKeys[table]) {
    await wait(Math.ceil(Math.random() * 2000));
    responses.push(...(await call(dynamodb, UnprocessedKeys, table)));
  }
  return responses;
};
