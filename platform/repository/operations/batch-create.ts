import DynamoDB from 'aws-sdk/clients/dynamodb';
import { ApiError } from '../../handler/api/api-error';
import { chunkArray } from '../../util/array/chunk-array';
import { wait } from '../../util/executers';
import {
  BatchCreateItemFunc,
  Entity,
  EntityBuilder,
  EntityCreate,
  EntityRepositoryConfig,
  EntityStore,
} from '../interface';

export type BatchCreateItemParams = {
  autoRetry?: true;
  tableName?: string;
};

export const batchCreateItem = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDB.DocumentClient,
  params?: BatchCreateItemParams
): BatchCreateItemFunc<Builder> => {
  return async (
    items: { key: EntityBuilder<Builder>['key']; entityCreate: EntityCreate<Builder> }[]
  ): Promise<Entity<Builder>[]> => {
    const entities: EntityStore<Builder>[] = items.map((e) => repoConfig.entitySerialize(e.key, e.entityCreate));
    const chunk = chunkArray(entities, 25);
    const table = params?.tableName || repoConfig.tableName;
    await Promise.all(
      chunk.map(async (c): Promise<any> => {
        const RequestItems: DynamoDB.DocumentClient.BatchWriteItemRequestMap = {
          [table]: c.map((Item) => {
            return { PutRequest: { Item } };
          }),
        };
        await call(dynamodb, RequestItems, table, params?.autoRetry);
      })
    );

    return entities.map((i) => repoConfig.entityDeserialize(i));
  };
};

const call = async (
  dynamodb: DynamoDB.DocumentClient,
  RequestItems: DynamoDB.DocumentClient.BatchWriteItemRequestMap,
  table: string,
  autoRetry?: boolean
): Promise<void> => {
  const { UnprocessedItems } = await dynamodb
    .batchWrite({ RequestItems })
    .promise()
    .catch((e) => {
      throw new ApiError('InternalServerError', 500, e.message);
    });
  if (autoRetry && UnprocessedItems && UnprocessedItems[table]) {
    await wait(Math.ceil(Math.random() * 2000));
    await call(dynamodb, UnprocessedItems, table, autoRetry);
  }
};
