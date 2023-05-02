import { EntityBuilder } from '../../../../model';
import { RepositoryConfig } from './config';
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
