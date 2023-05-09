import { ScanCommand, ScanCommandInput } from '@aws-sdk/lib-dynamodb';

import { PlatformFault } from 'error';
import { Model } from 'model';
import { Tracing } from 'tracing';
import { decodeLastEvaluatedKey, encodeLastEvaluatedKey } from 'util/pagination';
import { OperationConfig, OperationConfigView } from '../types/config';
import { ScanTableFn } from '../types/operations';
import { TableStoreBuilder } from '../types/table-store-builder';
import { parseTableName } from '../util/parse-name';

export const scanTable = <T extends TableStoreBuilder, M extends Model>(
  operationConfig: OperationConfig<T, M> | OperationConfigView<T, M>
): ScanTableFn<M> => {
  return async (
    queryParams: { limit: number; nextToken?: string },
    params?: Partial<ScanCommandInput>
  ): Promise<M['List']> => {
    const tableName = process.env[parseTableName(operationConfig.tableName)];

    const cmd = async () => {
      const { Items, LastEvaluatedKey } = await operationConfig.dynamoClient
        .send(
          new ScanCommand({
            TableName: tableName,
            ExclusiveStartKey: decodeLastEvaluatedKey(queryParams.nextToken),
            Limit: queryParams.limit,
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
    return Tracing.capture('scanTable', 'FAULT_DYN_SCAN_TABLE', 'scan', cmd, meta);
  };
};
