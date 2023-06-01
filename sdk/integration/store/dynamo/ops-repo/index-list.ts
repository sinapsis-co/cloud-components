import { QueryCommand, QueryCommandInput } from '@aws-sdk/lib-dynamodb';

import { Model } from 'model';
import { traceableFunction } from 'tracing';
import { decodeLastEvaluatedKey, encodeLastEvaluatedKey } from 'util/pagination';
import { RepoOpConfig } from '../types/config';
import { ListIndexFn } from '../types/ops-repo';
import { TableStoreBuilder } from '../types/table-store-builder';
import { parseTableName } from '../util/parse-name';

export const listIndex = <
  T extends TableStoreBuilder,
  M extends Model,
  GenericIndexName extends string | number | symbol,
  AttIndexName extends string | number | symbol
>(
  operationConfig: RepoOpConfig<T, M>
): ListIndexFn<M, GenericIndexName, AttIndexName> => {
  return async (
    index: GenericIndexName | AttIndexName,
    indexPK: string,
    queryParams?: { limit?: number; nextToken?: string },
    params?: Partial<QueryCommandInput>
  ): Promise<M['List']> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)];

    const mappedPkIndex = operationConfig.indexPkMapping(index as string);

    const cmd = async () => {
      const { Items, LastEvaluatedKey } = await operationConfig.dynamoClient.send(
        new QueryCommand({
          TableName: tableName,
          IndexName: index as string,
          KeyConditionExpression: '#PK = :PK',
          ExpressionAttributeNames: { '#PK': mappedPkIndex },
          ExpressionAttributeValues: { ':PK': indexPK },
          ExclusiveStartKey: decodeLastEvaluatedKey(queryParams?.nextToken),
          Limit: queryParams?.limit,
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
