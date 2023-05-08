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
  ScanTableFn,
  SoftDeleteItemFn,
  UpdateItemFn,
} from './operations';

export type Repository<M extends Model> = {
  tableName: M['StoreBuilder']['tableName'];
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
  keySerialize: RepositoryConfig<M>['keySerialize'];
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
  scanTable: ScanTableFn<M>;
  listIndex: ListIndexFn<M>;
};
