import { GetCommand, GetCommandInput } from '@aws-sdk/lib-dynamodb';

import { Model } from 'model';
import { Tracing } from 'tracing';
import { OperationConfig } from '../types/config';
import { CheckItemExistsFn } from '../types/operations';
import { parseTableName } from '../util/parse-name';

export const checkItemExists = <M extends Model>(operationConfig: OperationConfig<M>): CheckItemExistsFn<M> => {
  return async (
    key: M['Key'],
    params?: Partial<GetCommandInput>
  ): Promise<{ exists: boolean; entity?: M['Entity'] }> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)];
    const serializedKey = operationConfig.keySerialize(key);

    const cmd = async () => {
      const { Item } = await operationConfig.dynamoClient.send(
        new GetCommand({ TableName: tableName, Key: serializedKey, ...params })
      );
      if (!Item) return { exists: false };
      return { exists: true, entity: operationConfig.entityDeserialize(Item as unknown as M['Store']) };
    };

    const meta = { tableName, rawKey: key, serializedKey, params };
    return Tracing.capture('checkItemExists', 'FAULT_DYN_CHECK_ITEM_EXISTS', JSON.stringify(key), cmd, meta);
  };
};
