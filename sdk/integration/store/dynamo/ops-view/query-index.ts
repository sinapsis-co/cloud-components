import { QueryCommand, QueryCommandInput } from '@aws-sdk/lib-dynamodb';

import { Model } from 'model';
import { traceableFunction } from 'tracing';
import { decodeLastEvaluatedKey, encodeLastEvaluatedKey } from 'util/pagination';
import { ViewOpConfig } from '../types/config';
import { QueryIndexFn } from '../types/ops-view';
import { TableStoreBuilder } from '../types/table-store-builder';
import { expressionMapper } from '../util/exp-mapper';
import { parseTableName } from '../util/parse-name';

export const queryIndex = <
  T extends TableStoreBuilder,
  M extends Model,
  GenericIndexName extends string | number | symbol,
  AttIndexName extends string | number | symbol
>(
  operationConfig: ViewOpConfig<T, M>
): QueryIndexFn<M, GenericIndexName, AttIndexName> => {
  return async (
    index: GenericIndexName | AttIndexName,
    keyCondition: string,
    attributesMap: Record<string, any>,
    queryParams?: { limit?: string; nextToken?: string },
    params?: Partial<QueryCommandInput>
  ): Promise<M['List']> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)];

    const cmd = async () => {
      const { Items, LastEvaluatedKey } = await operationConfig.dynamoClient.send(
        new QueryCommand({
          TableName: tableName,
          IndexName: index as string,
          KeyConditionExpression: keyCondition,
          ...expressionMapper(attributesMap),
          ExclusiveStartKey: decodeLastEvaluatedKey(queryParams?.nextToken),
          Limit: parseInt(queryParams?.limit || '30'),
          ...params,
        })
      );

      return {
        items: Items ? Items.map((item) => operationConfig.entityDeserialize(item as M['Entity'])) : [],
        nextToken: encodeLastEvaluatedKey(LastEvaluatedKey),
      };
    };

    const meta = { tableName, index, params };
    return traceableFunction('listIndex', 'FAULT_DYN_LIST_INDEX', String(index), cmd, meta);
  };
};
