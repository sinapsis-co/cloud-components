import { QueryCommand, QueryCommandInput } from '@aws-sdk/lib-dynamodb';

import { Model } from 'model';
import { Tracing } from 'tracing';
import { decodeLastEvaluatedKey, encodeLastEvaluatedKey } from 'util/pagination';
import { OperationConfig, OperationConfigView } from '../types/config';
import { ListIndexFn } from '../types/operations';
import { parseTableName } from '../util/parse-name';

export const listIndex = <M extends Model>(
  operationConfig: OperationConfig<M> | OperationConfigView<M>
): ListIndexFn<M> => {
  return async (
    index: keyof M['StoreBuilder']['indexes'],
    queryParams: { limit: number; nextToken?: string },
    params?: Partial<QueryCommandInput>
  ): Promise<M['List']> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)];

    const cmd = async () => {
      const { Items, LastEvaluatedKey } = await operationConfig.dynamoClient.send(
        new QueryCommand({
          TableName: tableName,
          IndexName: index as string,
          ExclusiveStartKey: decodeLastEvaluatedKey(queryParams.nextToken),
          Limit: queryParams.limit,
          ...params,
        })
      );

      return {
        items: Items ? Items.map((item) => operationConfig.entityDeserialize(item as unknown as M['Store'])) : [],
        nextToken: encodeLastEvaluatedKey(LastEvaluatedKey),
      };
    };

    const meta = { tableName, index, params };
    return Tracing.capture('listIndex', 'FAULT_DYN_LIST_INDEX', String(index), cmd, meta);
  };
};
