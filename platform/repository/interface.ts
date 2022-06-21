import dayjs from 'dayjs';
import DynamoDB from 'aws-sdk/clients/dynamodb';
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
  events: {
    created: { name: `app.${Builder['name']}.created`; source: 'app'; payload: Entity<Builder> };
    updated: { name: `app.${Builder['name']}.updated`; source: 'app'; payload: Entity<Builder> };
    deleted: { name: `app.${Builder['name']}.deleted`; source: 'app'; payload: Entity<Builder> };
  };
  keySerialize: (key: EntityBuilder<Builder>['key']) => EntityBuilder<Builder>['storeMapping']['key'];
  entitySerialize: (key: EntityBuilder<Builder>['key'], entityCreate: Create) => EntityStore<Builder>;
  entityDeserialize: (entityStore: EntityStore<Builder>) => Entity<Builder>;
};

export type CreateItemFunc<Builder extends EntityBuilder, EntityCreate = Builder['body']> = (
  key: EntityBuilder<Builder>['key'],
  entityCreate: EntityCreate,
  params?: Partial<DynamoDB.DocumentClient.PutItemInput>
) => Promise<Entity<Builder>>;

export type BatchCreateItemFunc<Builder extends EntityBuilder> = (
  items: {
    key: EntityBuilder<Builder>['key'];
    entityCreate: EntityCreate<Builder>;
  }[],
  autoRetry?: boolean
) => Promise<Entity<Builder>[]>;

export type CheckItemExistsFunc<Builder extends EntityBuilder> = (
  key: EntityBuilder<Builder>['key'],
  params?: Partial<DynamoDB.DocumentClient.GetItemInput>
) => Promise<{ exists: boolean; entity?: Entity<Builder> }>;

export type GetItemFunc<Builder extends EntityBuilder> = (
  key: EntityBuilder<Builder>['key'],
  params?: Partial<DynamoDB.DocumentClient.GetItemInput>
) => Promise<Entity<Builder>>;

export type BatchGetItemFunc<Builder extends EntityBuilder> = (
  keys: EntityBuilder<Builder>['key'][],
  autoRetry?: boolean
) => Promise<Entity<Builder>[] | undefined[]>;

export type ListItemFunc<Builder extends EntityBuilder> = (
  pk: string,
  queryParams: { limit: number; nextToken?: string },
  params?: Partial<DynamoDB.DocumentClient.QueryInput>
) => Promise<PaginatedResponse<Entity<Builder>>>;

export type DeleteItemFunc<Builder extends EntityBuilder> = (
  key: EntityBuilder<Builder>['key'],
  params?: Partial<DynamoDB.DocumentClient.DeleteItemInput>
) => Promise<Entity<Builder>>;

export type SoftDeleteItemFunc<Builder extends EntityBuilder> = (
  key: EntityBuilder<Builder>['key'],
  params?: DynamoDB.DocumentClient.UpdateItemInput,
  deleteAfter?: TimeToDelete
) => Promise<Entity<Builder>>;

export type UpdateItemFunc<Builder extends EntityBuilder> = (
  key: EntityBuilder<Builder>['key'],
  entityUpdate: Partial<EntityUpdate<Builder>>,
  params?: Partial<DynamoDB.DocumentClient.UpdateItemInput>
) => Promise<Entity<Builder>>;

export type RecoverItemFunc<Builder extends EntityBuilder> = (
  key: EntityBuilder<Builder>['key'],
  params?: DynamoDB.DocumentClient.GetItemInput
) => Promise<Entity<Builder>>;

export type ScanTableFunc<Builder extends EntityBuilder> = (
  queryParams: { limit: number; nextToken?: string },
  params?: Partial<DynamoDB.DocumentClient.QueryInput>
) => Promise<PaginatedResponse<Entity<Builder>>>;

export type Repository<Builder extends EntityBuilder> = {
  events: {
    created: {
      source: 'app';
      name: `app.${Builder['name']}.created`;
      payload: Entity<Builder>;
    };
    updated: {
      source: 'app';
      name: `app.${Builder['name']}.updated`;
      payload: Entity<Builder>;
    };
    deleted: {
      source: 'app';
      name: `app.${Builder['name']}.deleted`;
      payload: Entity<Builder>;
    };
  };
  entitySerialize: EntityRepositoryConfig<Builder>['entitySerialize'];
  entityDeserialize: EntityRepositoryConfig<Builder>['entityDeserialize'];
  createItem: CreateItemFunc<Builder>;
  checkItemExists: CheckItemExistsFunc<Builder>;
  getItem: GetItemFunc<Builder>;
  listItem: ListItemFunc<Builder>;
  deleteItem: DeleteItemFunc<Builder>;
  updateItem: UpdateItemFunc<Builder>;
  batchCreateItem: BatchCreateItemFunc<Builder>;
  batchGetItem: BatchGetItemFunc<Builder>;
  softDeleteItem: SoftDeleteItemFunc<Builder>;
  recoverItem: RecoverItemFunc<Builder>;
  scanTable: ScanTableFunc<Builder>;
};
