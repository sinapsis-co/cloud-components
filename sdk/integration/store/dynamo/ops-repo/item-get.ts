import { GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';

import { PlatformError } from 'error';
import { Model } from 'model';
import { traceableFunction } from 'tracing';
import { RepoOpConfig } from '../types/config';
import { GetItemFn } from '../types/ops-repo';
import { TableStoreBuilder } from '../types/table-store-builder';

export const getItem = <T extends TableStoreBuilder, M extends Model>(
  operationConfig: RepoOpConfig<T, M>
): GetItemFn<M> => {
  return async (key: M['Key'], params?: Partial<GetCommandInput>): Promise<M['Entity']> => {
    const tableName = process.env[operationConfig.dynamoTableNameEnvVar]!;

    const serializedKey = operationConfig.keySerialize(key);

    const cmd = async () => {
      const { Item } = await operationConfig.dynamoClient.send(
        new GetCommand({ TableName: tableName, Key: serializedKey, ...params })
      );
      if (!Item) throw new PlatformError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });
      return operationConfig.entityDeserialize(Item as M['Entity']);
    };

    const meta = { tableName, rawKey: key, serializedKey, params };
    return traceableFunction('getItem', 'FAULT_DYN_GET_ITEM', JSON.stringify(key), cmd, meta);
  };
};
