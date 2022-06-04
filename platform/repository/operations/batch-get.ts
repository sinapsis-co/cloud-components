import DynamoDB from 'aws-sdk/clients/dynamodb';
import { ApiError } from '../../handler/api/api-error';
import { chunkArray } from '../../util/array/chunk-array';
import { wait } from '../../util/executers';
import { BatchGetItemFunc, Entity, EntityBuilder, EntityRepositoryConfig, EntityStore } from '../interface';

export const batchGetItem = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDB.DocumentClient,
  autoRetry?: boolean
): BatchGetItemFunc<Builder> => {
  return async (keys: EntityBuilder<Builder>['key'][]): Promise<Entity<Builder>[] | undefined[]> => {
    const table = repoConfig.tableName;
    const items = keys.map((k) => repoConfig.keySerialize(k));
    const chunk = chunkArray(items, 100);

    const result = await Promise.all(
      chunk.map(async (c): Promise<Entity<Builder>[] | []> => {
        const RequestItems = {
          [table]: {
            Keys: c,
          },
        };
        const response = await call(dynamodb, RequestItems, table, autoRetry);

        return response.map((item) => {
          return repoConfig.entityDeserialize(item as EntityStore<Builder>);
        });
      })
    );

    return result.flat();
  };
};

const call = async (
  dynamodb: DynamoDB.DocumentClient,
  RequestItems: DynamoDB.DocumentClient.BatchGetRequestMap,
  table: string,
  autoRetry?: boolean
): Promise<DynamoDB.ItemList> => {
  const responses: DynamoDB.ItemList = [];
  const { UnprocessedKeys, Responses } = await dynamodb
    .batchGet({ RequestItems })
    .promise()
    .catch((e) => {
      throw new ApiError('InternalServerError', 500, e.message);
    });
  if (Responses && Responses[table]) responses.push(...Responses[table]);
  if (autoRetry && UnprocessedKeys && UnprocessedKeys[table]) {
    await wait(Math.ceil(Math.random() * 2000));
    responses.push(...(await call(dynamodb, UnprocessedKeys, table)));
  }
  return responses;
};
