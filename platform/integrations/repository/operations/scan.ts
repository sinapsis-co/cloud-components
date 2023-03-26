import { DynamoDBDocumentClient, ScanCommand, ScanCommandInput } from '@aws-sdk/lib-dynamodb';
import { parseTableName } from '..';
import { PaginatedResponse } from '../../../catalog/api';
import { PlatformFault } from '../../../error';
import { decodeLastEvaluatedKey, encodeLastEvaluatedKey } from '../../../util/pagination';
import { Entity, EntityBuilder, EntityRepositoryConfig, EntityStore } from '../interface';
import { ScanTableFn } from '../op-interface';
import { TableBuilder } from '../table-builder';

export const scanTable = <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(
  repoConfig: EntityRepositoryConfig<Builder, Table>,
  dynamodb: DynamoDBDocumentClient
): ScanTableFn<Builder> => {
  return async (
    queryParams: { limit: number; nextToken?: string },
    params?: Partial<ScanCommandInput>
  ): Promise<PaginatedResponse<Entity<Builder>>> => {
    const TableName = process.env[parseTableName(repoConfig.tableName)];
    const { Items, LastEvaluatedKey } = await dynamodb
      .send(
        new ScanCommand({
          TableName,
          ExclusiveStartKey: decodeLastEvaluatedKey(queryParams.nextToken),
          Limit: queryParams.limit,
          ...params,
        })
      )
      .catch((e) => {
        throw new PlatformFault({ code: 'FAULT_DYN_SCAN_TABLE', detail: e.message });
      });

    return {
      items: Items ? Items.map((item) => repoConfig.entityDeserialize(item as EntityStore<Builder, Table>)) : [],
      nextToken: encodeLastEvaluatedKey(LastEvaluatedKey),
    };
  };
};
