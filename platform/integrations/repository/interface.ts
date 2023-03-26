import dayjs from 'dayjs';
import * as opInterface from './op-interface';
import { TableBuilder } from './table-builder';

export type TimeToDelete = {
  amount: number;
  period: dayjs.ManipulateType;
};

export type EntityBuilderKeys = {
  name: string;
  body: Record<string, unknown>;
  key: Record<string, unknown>;
  timers: Record<string, Date>;
  storeMapping: {
    key: Record<string, unknown>;
    timers: Record<string, string>;
  };
};

export type EntityBuilder<Builder extends EntityBuilderKeys = EntityBuilderKeys> = {
  name: Builder['name'];
  key: Builder['key'];
  body: Builder['body'];
  timers: Builder['timers'];
  storeMapping: Builder['storeMapping'];
};

export type Entity<Builder extends EntityBuilderKeys> = Builder['body'] & Builder['key'] & Builder['timers'];

export type EntityCreate<Builder extends EntityBuilderKeys, Omitted extends keyof Builder['body'] = ''> = Omit<
  Builder['body'],
  Omitted
> &
  Partial<Pick<Builder, 'timers'>>;

export type EntityUpdate<Builder extends EntityBuilderKeys> = Builder['body'];

export type EntityStore<Builder extends EntityBuilderKeys, Table extends TableBuilder> = Builder['body'] &
  Table['storeMapping']['key'] &
  Table['storeMapping']['timers'];

export type EntityRepositoryConfig<
  Builder extends EntityBuilder,
  Table extends TableBuilder,
  Create = EntityCreate<Builder>
> = {
  tableName: Table['tableName'];
  repoName: Builder['name'];
  // keySerialize: (key: EntityBuilder<Builder>['key']) => EntityBuilder<Builder>['storeMapping']['key'];
  // entitySerialize: (key: EntityBuilder<Builder>['key'], entityCreate: Create) => EntityStore<Builder>;
  // entityDeserialize: (entityStore: EntityStore<Builder>) => Entity<Builder>;
  keySerialize: (key: EntityBuilder<Builder>['key']) => Table['storeMapping']['key'];
  entitySerialize: (key: EntityBuilder<Builder>['key'], entityCreate: Create) => EntityStore<Builder, Table>;
  entityDeserialize: (entityStore: EntityStore<Builder, Table>) => Entity<Builder>;
};

export type RepositoryEvent<Builder extends EntityBuilder> = {
  created: {
    name: `app.${Builder['name']}.created`;
    payload: Entity<Builder>;
  };
  updated: {
    name: `app.${Builder['name']}.updated`;
    payload: Entity<Builder>;
  };
  deleted: {
    name: `app.${Builder['name']}.deleted`;
    payload: Entity<Builder>;
  };
  recovered: {
    name: `app.${Builder['name']}.recovered`;
    payload: Entity<Builder>;
  };
};

export type Repository<Builder extends EntityBuilder, Table extends TableBuilder> = {
  events: {
    created: {
      source: 'app';
      name: `app.${Builder['name']}.created`;
    };
    updated: {
      source: 'app';
      name: `app.${Builder['name']}.updated`;
    };
    deleted: {
      source: 'app';
      name: `app.${Builder['name']}.deleted`;
    };
    recovered: {
      source: 'app';
      name: `app.${Builder['name']}.recovered`;
    };
  };
  entitySerialize: EntityRepositoryConfig<Builder, Table>['entitySerialize'];
  entityDeserialize: EntityRepositoryConfig<Builder, Table>['entityDeserialize'];
  createItem: opInterface.CreateItemFn<Builder>;
  checkItemExists: opInterface.CheckItemExistsFn<Builder>;
  getItem: opInterface.GetItemFn<Builder>;
  listItem: opInterface.ListItemFn<Builder>;
  deleteItem: opInterface.DeleteItemFn<Builder>;
  updateItem: opInterface.UpdateItemFn<Builder>;
  batchCreateItem: opInterface.BatchCreateItemFn<Builder>;
  batchGetItem: opInterface.BatchGetItemFn<Builder>;
  softDeleteItem: opInterface.SoftDeleteItemFn<Builder>;
  recoverItem: opInterface.RecoverItemFn<Builder>;
  scanTable: opInterface.ScanTableFn<Builder>;
  listIndex: opInterface.ListIndexFn<Builder, Table>;
};
