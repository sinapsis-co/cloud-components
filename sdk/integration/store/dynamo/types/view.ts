import { Model } from 'model';
import { EntityDeserialize } from './config';
import { ListIndexFn, ListItemFn, ScanTableFn } from './operations';
import { TableStoreBuilder } from './table-store-builder';

export type View<T extends TableStoreBuilder, M extends Model> = {
  entityDeserialize: EntityDeserialize<M>;
  listItem: ListItemFn<M>;
  scanTable: ScanTableFn<M>;
  listIndex: ListIndexFn<M, T>;
};
