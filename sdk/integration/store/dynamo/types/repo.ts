import { Model } from 'model';
import { EntityDeserialize, RepositoryConfig } from './config';
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
  SoftDeleteItemFn,
  UpdateItemFn,
} from './ops-repo';
import { TableStoreBuilder } from './table-store-builder';

export type Repository<
  PK extends string,
  SK extends string | undefined,
  GenericIndexName extends string | number | symbol,
  AttIndexName extends string | number | symbol,
  T extends TableStoreBuilder<PK, SK, GenericIndexName, AttIndexName>,
  M extends Model
> = {
  tableName: T['tableName'];
  events: {
    created: {
      source: 'app';
      name: `app.${M['Type']}.created`;
    };
    updated: {
      source: 'app';
      name: `app.${M['Type']}.updated`;
    };
    deleted: {
      source: 'app';
      name: `app.${M['Type']}.deleted`;
    };
    recovered: {
      source: 'app';
      name: `app.${M['Type']}.recovered`;
    };
  };
  entitySerialize: (key: M['Key'], body: M['Body']) => M['Entity'] & T['keyMapping'];
  keySerialize: RepositoryConfig<T, M>['keySerialize'];
  entityDeserialize: EntityDeserialize<M>;
  createItem: CreateItemFn<M>;
  checkItemExists: CheckItemExistsFn<M>;
  getItem: GetItemFn<M>;
  listItem: ListItemFn<M>;
  deleteItem: DeleteItemFn<M>;
  updateItem: UpdateItemFn<M>;
  batchCreateItem: BatchCreateItemFn<M>;
  batchGetItem: BatchGetItemFn<M>;
  softDeleteItem: SoftDeleteItemFn<M>;
  recoverItem: RecoverItemFn<M>;
  listIndex: ListIndexFn<M, GenericIndexName, AttIndexName>;
};
