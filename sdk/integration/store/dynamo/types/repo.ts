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
import { QueryFn, QueryIndexFn, ScanFn, TransactWriteFn } from './ops-view';
import { TableStoreBuilder } from './table-store-builder';

export type Repository<T extends TableStoreBuilder, M extends Model> = {
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
  listIndex: ListIndexFn<M, keyof T['genericIndexes'], keyof T['attIndexes']>;
  transactWrite: TransactWriteFn<M>;
  scan: ScanFn<M>;
  query: QueryFn<M>;
  queryIndex: QueryIndexFn<M, keyof T['genericIndexes'], keyof T['attIndexes']>;
};
