import { EntityBuilder } from 'model';
import { ViewConfig } from './config';
import { ListIndexFn, ListItemFn, ScanTableFn } from './operations';
import { TableStoreBuilder } from './table-store-builder';

export type View<EBuilder extends EntityBuilder, TBuilder extends TableStoreBuilder> = {
  entityDeserialize: ViewConfig<EBuilder, TBuilder>['entityDeserialize'];
  listItem: ListItemFn<EBuilder>;
  scanTable: ScanTableFn<EBuilder>;
  listIndex: ListIndexFn<EBuilder, TBuilder>;
};
