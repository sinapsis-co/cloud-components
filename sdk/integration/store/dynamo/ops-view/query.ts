import { QueryCommand, QueryCommandInput } from '@aws-sdk/lib-dynamodb';

import { PlatformFault } from 'error';
import { Model } from 'model';
import { traceableFunction } from 'tracing';
import { decodeLastEvaluatedKey, encodeLastEvaluatedKey } from 'util/pagination';
import { ViewOpConfig } from '../types/config';
import { QueryFn } from '../types/ops-view';
import { TableStoreBuilder } from '../types/table-store-builder';
import { expressionMapper } from '../util/exp-mapper';
import { parseTableName } from '../util/parse-name';

export const query = <T extends TableStoreBuilder, M extends Model>(
  operationConfig: ViewOpConfig<T, M>
): QueryFn<M> => {
  return async (
    keyCondition: string,
    attributesMap: Record<string, any>,
    queryParams?: { limit?: number; nextToken?: string },
    params?: Partial<QueryCommandInput>
  ): Promise<M['List']> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)];

    const cmd = async () => {
      const { Items, LastEvaluatedKey } = await operationConfig.dynamoClient
        .send(
          new QueryCommand({
            TableName: tableName,
            KeyConditionExpression: keyCondition,
            ...expressionMapper(attributesMap),
            ExclusiveStartKey: decodeLastEvaluatedKey(queryParams?.nextToken),
            Limit: queryParams?.limit,
            ...params,
          })
        )
        .catch((e) => {
          throw new PlatformFault({ code: 'FAULT_DYN_LIST_ITEM', detail: e.message });
        });

      return {
        items: Items ? Items.map((item) => operationConfig.entityDeserialize(item as M['Entity'])) : [],
        nextToken: encodeLastEvaluatedKey(LastEvaluatedKey),
      };
    };

    const meta = { tableName: tableName, keyCondition, params };
    return traceableFunction('listItems', 'FAULT_DYN_LIST_ITEM', String(keyCondition), cmd, meta);
  };
};
