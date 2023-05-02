import { EntityBuilder } from 'model';
import { ListIndexFn, ListItemFn, ScanTableFn } from './operations';
import { RepositoryConfig } from './repository';
import { TableStoreBuilder } from './table-store-builder';

export type View<EBuilder extends EntityBuilder, TBuilder extends TableStoreBuilder> = {
  entityDeserialize: RepositoryConfig<EBuilder, TBuilder>['entityDeserialize'];
  listItem: ListItemFn<EBuilder>;
  scanTable: ScanTableFn<EBuilder>;
  listIndex: ListIndexFn<EBuilder, TBuilder>;
};
