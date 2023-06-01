import { QueryCommand, QueryCommandInput } from '@aws-sdk/lib-dynamodb';

import { PlatformFault } from 'error';
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
    pk: Partial<M['Key']>,
    queryParams?: { limit?: number; nextToken?: string },
    params?: Partial<QueryCommandInput>
  ): Promise<M['List']> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)];

    const mappedKey = operationConfig.keySerialize(pk).PK;

    const cmd = async () => {
      const { Items, LastEvaluatedKey } = await operationConfig.dynamoClient
        .send(
          new QueryCommand({
            TableName: tableName,
            KeyConditionExpression: '#PK = :PK',
            ExpressionAttributeNames: { '#PK': 'PK' },
            ExpressionAttributeValues: { ':PK': mappedKey },
            ExclusiveStartKey: decodeLastEvaluatedKey(queryParams?.nextToken),
            Limit: queryParams?.limit || 30,
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

    const meta = { tableName: tableName, pk, params };
    return traceableFunction('listItems', 'FAULT_DYN_LIST_ITEM', String(pk), cmd, meta);
  };
};
