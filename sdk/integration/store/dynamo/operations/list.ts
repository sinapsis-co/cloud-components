import { QueryCommand, QueryCommandInput } from '@aws-sdk/lib-dynamodb';

import { PlatformFault } from 'error';
import { Model } from 'model';
import { Tracing } from 'tracing';
import { decodeLastEvaluatedKey, encodeLastEvaluatedKey } from 'util/pagination';
import { OperationConfig, OperationConfigView } from '../types/config';
import { ListItemFn } from '../types/operations';
import { parseTableName } from '../util/parse-name';

export const listItem = <M extends Model>(
  operationConfig: OperationConfig<M> | OperationConfigView<M>
): ListItemFn<M> => {
  return async (
    pk: M['StoreBuilder']['keyMapping']['pk'],
    queryParams: { limit: number; nextToken?: string },
    params?: Partial<QueryCommandInput>
  ): Promise<M['List']> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)];

    const cmd = async () => {
      const { Items, LastEvaluatedKey } = await operationConfig.dynamoClient
        .send(
          new QueryCommand({
            TableName: tableName,
            KeyConditionExpression: '#pk = :pk',
            ExpressionAttributeNames: { '#pk': 'pk' },
            ExpressionAttributeValues: { ':pk': pk },
            ExclusiveStartKey: decodeLastEvaluatedKey(queryParams.nextToken),
            Limit: queryParams.limit,
            ...params,
          })
        )
        .catch((e) => {
          throw new PlatformFault({ code: 'FAULT_DYN_LIST_ITEM', detail: e.message });
        });

      return {
        items: Items ? Items.map((item) => operationConfig.entityDeserialize(item as unknown as M['Store'])) : [],
        nextToken: encodeLastEvaluatedKey(LastEvaluatedKey),
      };
    };

    const meta = { tableName: tableName, pk, params };
    return Tracing.capture('listItems', 'FAULT_DYN_LIST_ITEM', String(pk), cmd, meta);
  };
};
