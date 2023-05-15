import { Model } from 'model';
import { EntityDeserialize } from './config';
import { ListIndexFn, ListItemFn, ScanTableFn, TransactWriteFn } from './operations';
import { TableStoreBuilder } from './table-store-builder';

export type RepositoryView<T extends TableStoreBuilder, M extends Model> = {
  entityDeserialize: EntityDeserialize<M>;
  listItem: ListItemFn<M>;
  scanTable: ScanTableFn<M>;
  listIndex: ListIndexFn<M, T>;
  transactWrite: TransactWriteFn<M>;
};
