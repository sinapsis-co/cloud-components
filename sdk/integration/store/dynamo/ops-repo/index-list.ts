import { QueryCommand, QueryCommandInput, ScanCommand } from '@aws-sdk/lib-dynamodb';

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
    indexPK: string | null,
    queryParams?: { limit?: string; nextToken?: string },
    params?: Partial<QueryCommandInput>
  ): Promise<M['List']> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)];

    const cmd = async () => {
      if (indexPK === null) {
        const { Items, LastEvaluatedKey } = await operationConfig.dynamoClient.send(
          new ScanCommand({
            TableName: tableName,
            IndexName: index as string,
            ExclusiveStartKey: decodeLastEvaluatedKey(queryParams?.nextToken),
            Limit: parseInt(queryParams?.limit || '30'),
            ...params,
          })
        );
        return {
          items: Items ? Items.map((item) => operationConfig.entityDeserialize(item as M['Entity'])) : [],
          nextToken: encodeLastEvaluatedKey(LastEvaluatedKey),
        };
      } else {
        const { Items, LastEvaluatedKey } = await operationConfig.dynamoClient.send(
          new QueryCommand({
            TableName: tableName,
            IndexName: index as string,
            KeyConditionExpression: '#PK = :PK',
            ExpressionAttributeNames: { '#PK': operationConfig.indexPkMapping(index as string) },
            ExpressionAttributeValues: { ':PK': indexPK },
            ExclusiveStartKey: decodeLastEvaluatedKey(queryParams?.nextToken),
            Limit: parseInt(queryParams?.limit || '30'),
            ...params,
          })
        );
        return {
          items: Items ? Items.map((item) => operationConfig.entityDeserialize(item as M['Entity'])) : [],
          nextToken: encodeLastEvaluatedKey(LastEvaluatedKey),
        };
      }
    };

    const meta = { tableName, index, params };
    return traceableFunction('listIndex', 'FAULT_DYN_LIST_INDEX', String(index), cmd, meta);
  };
};
