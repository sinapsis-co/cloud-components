import { Model } from '@sinapsis-co/cc-sdk/model';
import { dynamodb } from './client';
import { batchGet } from './ops-view/batch-get';
import { batchWrite } from './ops-view/batch-write';
import { query } from './ops-view/query';
import { queryIndex } from './ops-view/query-index';
import { scan } from './ops-view/scan';
import { transactWrite } from './ops-view/transact-write';
import { ViewConfig, ViewOpConfig } from './types/config';
import { RepositoryView } from './types/repo-view';
import { TableStoreBuilder } from './types/table-store-builder';
import { entityDeserialize, indexPkMapping } from './util/mappers';

export const viewRepository = <T extends TableStoreBuilder, M extends Model>(
  table: typeof TableStoreBuilder<T['keyMapping']['PK'], T['keyMapping']['SK'], keyof T['genericIndexes']>,
  repoConfig: ViewConfig<T>
): RepositoryView<T, M> => {
  const operationConfig: ViewOpConfig<T, M> = {
    dynamoClient: dynamodb,
    tableName: repoConfig.tableName,
    indexPkMapping: indexPkMapping(table),
    entityDeserialize: entityDeserialize<M>(table),
  };
  return {
    entityDeserialize: entityDeserialize<M>(table),
    batchGet: batchGet(operationConfig),
    batchWrite: batchWrite(operationConfig),
    transactWrite: transactWrite(operationConfig),
    query: query(operationConfig),
    queryIndex: queryIndex(operationConfig),
    scan: scan(operationConfig),
  };
};
