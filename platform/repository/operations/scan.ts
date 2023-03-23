import { DynamoDBDocumentClient, ScanCommand } from '@aws-sdk/lib-dynamodb';
import { PaginatedResponse } from '../../catalog/api';
import { PlatformFault } from '../../error';
import { decodeLastEvaluatedKey, encodeLastEvaluatedKey } from '../../util/pagination';
import { Entity, EntityBuilder, EntityRepositoryConfig, ScanTableFn } from '../interface';

export const scanTable = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>,
  dynamodb: DynamoDBDocumentClient
): ScanTableFn<Builder> => {
  return async (
    queryParams: { limit: number; nextToken?: string },
    params?: Partial<ScanCommand>
  ): Promise<PaginatedResponse<Entity<Builder>>> => {
    const { Items, LastEvaluatedKey } = await dynamodb
      .send(
        new ScanCommand({
          TableName: repoConfig.tableName,
          ExclusiveStartKey: decodeLastEvaluatedKey(queryParams.nextToken),
          Limit: queryParams.limit,
          ...params,
        })
      )
      .catch((e) => {
        throw new PlatformFault({ code: 'FAULT_DYN_SCAN_TABLE', detail: e.message });
      });

    return {
      items: Items ? Items.map((item) => repoConfig.entityDeserialize(item)) : [],
      nextToken: encodeLastEvaluatedKey(LastEvaluatedKey),
    };
  };
};
