import { QueryCommand, QueryCommandInput, ScanCommand } from '@aws-sdk/lib-dynamodb';

import { Model } from 'model';
import { traceableFunction } from 'tracing';
import { decodeLastEvaluatedKey, encodeLastEvaluatedKey } from 'util/pagination';
import { RepoOpConfig } from '../types/config';
import { ListItemFn } from '../types/ops-repo';
import { TableStoreBuilder } from '../types/table-store-builder';
import { parseTableName } from '../util/parse-name';

export const listItem = <T extends TableStoreBuilder, M extends Model>(
  operationConfig: RepoOpConfig<T, M>
): ListItemFn<M> => {
  return async (
    PK: Partial<M['Key']> | null,
    queryParams?: { limit?: string; nextToken?: string },
    params?: Partial<QueryCommandInput>
  ): Promise<M['List']> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)];

    const cmd = async () => {
      if (PK === null) {
        const { Items, LastEvaluatedKey } = await operationConfig.dynamoClient.send(
          new ScanCommand({
            TableName: tableName,
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
            KeyConditionExpression: '#PK = :PK',
            ExpressionAttributeNames: { '#PK': 'PK' },
            ExpressionAttributeValues: { ':PK': operationConfig.keySerialize(PK).PK },
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

    const meta = { tableName: tableName, pk: PK, params };
    return traceableFunction('listItems', 'FAULT_DYN_LIST_ITEM', String(PK), cmd, meta);
  };
};
