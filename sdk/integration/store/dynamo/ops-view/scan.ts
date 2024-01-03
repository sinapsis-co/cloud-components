import { ScanCommand, ScanCommandInput } from '@aws-sdk/lib-dynamodb';

import { PlatformFault } from 'error';
import { Model } from 'model';
import { traceableFunction } from 'tracing';
import { decodeLastEvaluatedKey, encodeLastEvaluatedKey } from 'util/pagination';
import { ViewOpConfig } from '../types/config';
import { ScanFn } from '../types/ops-view';
import { TableStoreBuilder } from '../types/table-store-builder';

export const scan = <T extends TableStoreBuilder, M extends Model>(operationConfig: ViewOpConfig<T, M>): ScanFn<M> => {
  return async (
    queryParams?: { limit?: string; nextToken?: string },
    params?: Partial<ScanCommandInput>
  ): Promise<M['List']> => {
    const tableName = process.env[operationConfig.dynamoTableNameEnvVar]!;

    const cmd = async () => {
      const { Items, LastEvaluatedKey } = await operationConfig.dynamoClient
        .send(
          new ScanCommand({
            TableName: tableName,
            ExclusiveStartKey: decodeLastEvaluatedKey(queryParams?.nextToken),
            Limit: parseInt(queryParams?.limit || '30'),
            ...params,
          })
        )
        .catch((e) => {
          throw new PlatformFault({ code: 'FAULT_DYN_SCAN_TABLE', detail: e.message });
        });

      return {
        items: Items ? Items.map((item) => operationConfig.entityDeserialize(item as M['Entity'])) : [],
        nextToken: encodeLastEvaluatedKey(LastEvaluatedKey),
      };
    };

    const meta = { tableName, params };
    return traceableFunction('scanTable', 'FAULT_DYN_SCAN_TABLE', 'scan', cmd, meta);
  };
};
