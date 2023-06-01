import { Model } from 'model';
import { EntityDeserialize } from './config';
import { BatchGetFn, BatchWriteFn, QueryFn, QueryIndexFn, ScanFn, TransactWriteFn } from './ops-view';
import { TableStoreBuilder } from './table-store-builder';

export type RepositoryView<T extends TableStoreBuilder, M extends Model> = {
  entityDeserialize: EntityDeserialize<M>;
  scan: ScanFn<M>;
  query: QueryFn<M>;
  queryIndex: QueryIndexFn<M, keyof T['genericIndexes'], keyof T['attIndexes']>;
  transactWrite: TransactWriteFn<M>;
  batchWrite: BatchWriteFn<M>;
  batchGet: BatchGetFn<M, T>;
};
