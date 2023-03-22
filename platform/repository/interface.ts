import * as Dynamo from '@aws-sdk/lib-dynamodb';
import dayjs from 'dayjs';
import { PaginatedResponse } from '../catalog/api';

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

export type EntityStore<Builder extends EntityBuilderKeys> = Builder['body'] &
  Builder['storeMapping']['key'] &
  Builder['storeMapping']['timers'];

export type EntityRepositoryConfig<Builder extends EntityBuilder, Create = EntityCreate<Builder>> = {
  tableName: string;
  repoName: Builder['name'];
  keySerialize: (key: EntityBuilder<Builder>['key']) => EntityBuilder<Builder>['storeMapping']['key'];
  entitySerialize: (key: EntityBuilder<Builder>['key'], entityCreate: Create) => EntityStore<Builder>;
  entityDeserialize: (entityStore: EntityStore<Builder>) => Entity<Builder>;
};

export type CreateItemFn<Builder extends EntityBuilder, EntityCreate = Builder['body']> = (
  key: EntityBuilder<Builder>['key'],
  entityCreate: EntityCreate,
  params?: Partial<Dynamo.PutCommandInput>
) => Promise<Entity<Builder>>;

export type BatchCreateItemFn<Builder extends EntityBuilder> = (
  Commands: {
    key: EntityBuilder<Builder>['key'];
    entityCreate: EntityCreate<Builder>;
  }[],
  autoRetry?: boolean
) => Promise<Entity<Builder>[]>;

export type CheckItemExistsFn<Builder extends EntityBuilder> = (
  key: EntityBuilder<Builder>['key'],
  params?: Partial<Dynamo.GetCommandInput>
) => Promise<{ exists: boolean; entity?: Entity<Builder> }>;

export type GetItemFn<Builder extends EntityBuilder> = (
  key: EntityBuilder<Builder>['key'],
  params?: Partial<Dynamo.GetCommandInput>
) => Promise<Entity<Builder>>;

export type BatchGetItemFn<Builder extends EntityBuilder> = (
  keys: EntityBuilder<Builder>['key'][],
  autoRetry?: boolean
) => Promise<Entity<Builder>[] | undefined[]>;

export type ListItemFn<Builder extends EntityBuilder> = (
  pk: string,
  queryParams: { limit: number; nextToken?: string },
  params?: Partial<Dynamo.QueryCommandInput>
) => Promise<PaginatedResponse<Entity<Builder>>>;

export type DeleteItemFn<Builder extends EntityBuilder> = (
  key: EntityBuilder<Builder>['key'],
  params?: Partial<Dynamo.DeleteCommandInput>
) => Promise<Entity<Builder>>;

export type SoftDeleteItemFn<Builder extends EntityBuilder> = (
  key: EntityBuilder<Builder>['key'],
  params?: Dynamo.UpdateCommandInput,
  deleteAfter?: TimeToDelete
) => Promise<Entity<Builder>>;

export type UpdateItemFn<Builder extends EntityBuilder> = (
  key: EntityBuilder<Builder>['key'],
  entityUpdate: Partial<EntityUpdate<Builder>>,
  params?: Partial<Dynamo.UpdateCommandInput>
) => Promise<Entity<Builder>>;

export type RecoverItemFn<Builder extends EntityBuilder> = (
  key: EntityBuilder<Builder>['key'],
  params?: Dynamo.GetCommandInput
) => Promise<Entity<Builder>>;

export type ScanTableFn<Builder extends EntityBuilder> = (
  queryParams: { limit: number; nextToken?: string },
  params?: Partial<Dynamo.ScanCommand>
) => Promise<PaginatedResponse<Entity<Builder>>>;

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
};

export type Repository<Builder extends EntityBuilder> = {
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
  };
  entitySerialize: EntityRepositoryConfig<Builder>['entitySerialize'];
  entityDeserialize: EntityRepositoryConfig<Builder>['entityDeserialize'];
  createItem: CreateItemFn<Builder>;
  checkItemExists: CheckItemExistsFn<Builder>;
  getItem: GetItemFn<Builder>;
  listItem: ListItemFn<Builder>;
  deleteItem: DeleteItemFn<Builder>;
  updateItem: UpdateItemFn<Builder>;
  batchCreateItem: BatchCreateItemFn<Builder>;
  batchGetItem: BatchGetItemFn<Builder>;
  softDeleteItem: SoftDeleteItemFn<Builder>;
  recoverItem: RecoverItemFn<Builder>;
  scanTable: ScanTableFn<Builder>;
};
