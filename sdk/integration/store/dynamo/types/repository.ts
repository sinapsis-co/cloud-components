import { Entity, EntityBuilder, EntityStore } from '../../../../model';
import {
  BatchCreateItemFn,
  BatchGetItemFn,
  CheckItemExistsFn,
  CreateItemFn,
  DeleteItemFn,
  GetItemFn,
  ListIndexFn,
  ListItemFn,
  RecoverItemFn,
  ScanTableFn,
  SoftDeleteItemFn,
  UpdateItemFn,
} from './operations';
import { TableStoreBuilder } from './table-store-builder';

export type RepositoryConfig<EBuilder extends EntityBuilder, TBuilder extends TableStoreBuilder> = {
  repoName: EBuilder['name'];
  tableName: TBuilder['tableName'];
  keySerialize: (key: EntityBuilder<EBuilder>['key']) => TBuilder['storeMapping']['key'];
  entitySerialize: (
    key: EntityBuilder<EBuilder>['key'],
    body: EntityBuilder<EBuilder>['body']
  ) => EntityStore<EBuilder, TBuilder>;
  entityDeserialize: (entityStore: EntityStore<EBuilder, TBuilder>) => Entity<EBuilder>;
};

export type ViewConfig<EBuilder extends EntityBuilder, TBuilder extends TableStoreBuilder> = {
  tableName: TBuilder['tableName'];
  entityDeserialize: (entityStore: EntityStore<EBuilder, TBuilder>) => Entity<EBuilder>;
};

export type Repository<EBuilder extends EntityBuilder, TBuilder extends TableStoreBuilder> = {
  events: {
    created: {
      source: 'app';
      name: `app.${EBuilder['name']}.created`;
    };
    updated: {
      source: 'app';
      name: `app.${EBuilder['name']}.updated`;
    };
    deleted: {
      source: 'app';
      name: `app.${EBuilder['name']}.deleted`;
    };
    recovered: {
      source: 'app';
      name: `app.${EBuilder['name']}.recovered`;
    };
  };
  keySerialize: RepositoryConfig<EBuilder, TBuilder>['keySerialize'];
  entitySerialize: RepositoryConfig<EBuilder, TBuilder>['entitySerialize'];
  entityDeserialize: RepositoryConfig<EBuilder, TBuilder>['entityDeserialize'];
  createItem: CreateItemFn<EBuilder>;
  checkItemExists: CheckItemExistsFn<EBuilder>;
  getItem: GetItemFn<EBuilder>;
  listItem: ListItemFn<EBuilder>;
  deleteItem: DeleteItemFn<EBuilder>;
  updateItem: UpdateItemFn<EBuilder>;
  batchCreateItem: BatchCreateItemFn<EBuilder>;
  batchGetItem: BatchGetItemFn<EBuilder>;
  softDeleteItem: SoftDeleteItemFn<EBuilder>;
  recoverItem: RecoverItemFn<EBuilder>;
  scanTable: ScanTableFn<EBuilder>;
  listIndex: ListIndexFn<EBuilder, TBuilder>;
};
