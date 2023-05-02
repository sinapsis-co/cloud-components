import { DynamoDBDocumentClient, QueryCommand, QueryCommandInput } from '@aws-sdk/lib-dynamodb';

import { PaginatedResponse } from 'catalog/api';
import { Entity, EntityBuilder, EntityStore } from 'model';
import { Tracing } from 'tracing';
import { decodeLastEvaluatedKey, encodeLastEvaluatedKey } from 'util/pagination';
import { ListIndexFn } from '../types/operations';
import { RepositoryConfig, ViewConfig } from '../types/repository';
import { TableStoreBuilder } from '../types/table-store-builder';
import { parseTableName } from '../util/parse-name';

export const listIndex = <Builder extends EntityBuilder, Table extends TableStoreBuilder = TableStoreBuilder>(
  repoConfig: RepositoryConfig<Builder, Table> | ViewConfig<Builder, Table>,
  dynamodb: DynamoDBDocumentClient
): ListIndexFn<Builder, Table> => {
  return async (
    index: keyof Table['indexes'],
    queryParams: { limit: number; nextToken?: string },
    params?: Partial<QueryCommandInput>
  ): Promise<PaginatedResponse<Entity<Builder>>> => {
    const tableName = process.env[parseTableName(repoConfig.tableName)];

    const cmd = async () => {
      const { Items, LastEvaluatedKey } = await dynamodb.send(
        new QueryCommand({
          TableName: tableName,
          IndexName: index as string,
          ExclusiveStartKey: decodeLastEvaluatedKey(queryParams.nextToken),
          Limit: queryParams.limit,
          ...params,
        })
      );

      return {
        items: Items ? Items.map((item) => repoConfig.entityDeserialize(item as EntityStore<Builder, Table>)) : [],
        nextToken: encodeLastEvaluatedKey(LastEvaluatedKey),
      };
    };

    const meta = { tableName, index, params };
    return Tracing.capture('listIndex', 'FAULT_DYN_LIST_INDEX', String(index), cmd, meta);
  };
};
