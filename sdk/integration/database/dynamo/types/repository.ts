import { Entity, EntityBuilder, EntityCreate, EntityStore } from './entity-builder';
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
import { TableBuilder } from './table-builder';

export type RepositoryConfig<
  EBuilder extends EntityBuilder,
  TBuilder extends TableBuilder,
  Create = EntityCreate<EBuilder>
> = {
  tableName: TBuilder['tableName'];
  repoName: EBuilder['name'];
  keySerialize: (key: EntityBuilder<EBuilder>['key']) => TBuilder['storeMapping']['key'];
  entitySerialize: (key: EntityBuilder<EBuilder>['key'], entityCreate: Create) => EntityStore<EBuilder, TBuilder>;
  entityDeserialize: (entityStore: EntityStore<EBuilder, TBuilder>) => Entity<EBuilder>;
};

export type ViewConfig<EBuilder extends EntityBuilder, TBuilder extends TableBuilder> = {
  tableName: TBuilder['tableName'];
  entityDeserialize: (entityStore: EntityStore<EBuilder, TBuilder>) => Entity<EBuilder>;
};

export type RepositoryEvent<EBuilder extends EntityBuilder> = {
  created: {
    name: `app.${EBuilder['name']}.created`;
    payload: Entity<EBuilder>;
  };
  updated: {
    name: `app.${EBuilder['name']}.updated`;
    payload: Entity<EBuilder>;
  };
  deleted: {
    name: `app.${EBuilder['name']}.deleted`;
    payload: Entity<EBuilder>;
  };
  recovered: {
    name: `app.${EBuilder['name']}.recovered`;
    payload: Entity<EBuilder>;
  };
};

export type Repository<EBuilder extends EntityBuilder, TBuilder extends TableBuilder> = {
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

export type View<EBuilder extends EntityBuilder, TBuilder extends TableBuilder> = {
  entityDeserialize: RepositoryConfig<EBuilder, TBuilder>['entityDeserialize'];
  listItem: ListItemFn<EBuilder>;
  scanTable: ScanTableFn<EBuilder>;
  listIndex: ListIndexFn<EBuilder, TBuilder>;
};
