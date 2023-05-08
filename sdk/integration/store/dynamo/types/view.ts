import { Model } from 'model';
import { EntityDeserialize } from './config';
import { ListIndexFn, ListItemFn, ScanTableFn } from './operations';

export type View<M extends Model> = {
  entityDeserialize: EntityDeserialize<M>;
  listItem: ListItemFn<M>;
  scanTable: ScanTableFn<M>;
  listIndex: ListIndexFn<M>;
};
