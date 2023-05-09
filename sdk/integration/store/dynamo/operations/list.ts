import { QueryCommand, QueryCommandInput } from '@aws-sdk/lib-dynamodb';

import { Model } from '@sinapsis-co/cc-sdk/model';
import { PlatformFault } from 'error';
import { Tracing } from 'tracing';
import { decodeLastEvaluatedKey, encodeLastEvaluatedKey } from 'util/pagination';
import { OperationConfig, OperationConfigView } from '../types/config';
import { ListItemFn } from '../types/operations';
import { TableStoreBuilder } from '../types/table-store-builder';
import { parseTableName } from '../util/parse-name';

export const listItem = <T extends TableStoreBuilder, M extends Model>(
  operationConfig: OperationConfig<T, M> | OperationConfigView<T, M>
): ListItemFn<M> => {
  return async (
    pk: T['keyMapping']['PK'],
    queryParams: { limit: number; nextToken?: string },
    params?: Partial<QueryCommandInput>
  ): Promise<M['List']> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)];

    const cmd = async () => {
      const { Items, LastEvaluatedKey } = await operationConfig.dynamoClient
        .send(
          new QueryCommand({
            TableName: tableName,
            KeyConditionExpression: '#PK = :PK',
            ExpressionAttributeNames: { '#PK': 'PK' },
            ExpressionAttributeValues: { ':PK': pk },
            ExclusiveStartKey: decodeLastEvaluatedKey(queryParams.nextToken),
            Limit: queryParams.limit,
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
    return Tracing.capture('listItems', 'FAULT_DYN_LIST_ITEM', String(pk), cmd, meta);
  };
};
