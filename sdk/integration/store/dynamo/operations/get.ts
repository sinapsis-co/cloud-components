import { GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';

import { PlatformError } from 'error';
import { Model } from 'model';
import { Tracing } from 'tracing';
import { OperationConfig } from '../types/config';
import { GetItemFn } from '../types/operations';
import { parseTableName } from '../util/parse-name';

export const getItem = <M extends Model>(operationConfig: OperationConfig<M>): GetItemFn<M> => {
  return async (key: M['Key'], params?: Partial<GetCommandInput>): Promise<M['Entity']> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)];
    const serializedKey = operationConfig.keySerialize(key);

    const cmd = async () => {
      const { Item } = await operationConfig.dynamoClient.send(
        new GetCommand({ TableName: tableName, Key: serializedKey, ...params })
      );
      if (!Item) throw new PlatformError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });
      return operationConfig.entityDeserialize(Item as unknown as M['Store']);
    };

    const meta = { tableName, rawKey: key, serializedKey, params };
    return Tracing.capture('getItem', 'FAULT_DYN_GET_ITEM', JSON.stringify(key), cmd, meta);
  };
};
