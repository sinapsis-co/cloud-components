import * as Dynamo from '@aws-sdk/lib-dynamodb';
import { PaginatedResponse } from '../../catalog/api';
import { Entity, EntityBuilder, EntityCreate, EntityUpdate, TimeToDelete } from './interface';
import { TableBuilder } from './table-builder';

export type CreateItemFn<Builder extends EntityBuilder, EntityCreate = Builder['body']> = (
  key: EntityBuilder<Builder>['key'],
  entityCreate: EntityCreate,
  params?: Partial<Dynamo.PutCommandInput> & { emitEvent?: boolean }
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
  params?: Partial<Dynamo.DeleteCommandInput> & { emitEvent?: boolean }
) => Promise<Entity<Builder>>;

export type SoftDeleteItemFn<Builder extends EntityBuilder> = (
  key: EntityBuilder<Builder>['key'],
  params?: Dynamo.UpdateCommandInput & { deleteAfter?: TimeToDelete; emitEvent?: boolean },
  deleteAfter?: TimeToDelete
) => Promise<Entity<Builder>>;

export type UpdateItemFn<Builder extends EntityBuilder> = (
  key: EntityBuilder<Builder>['key'],
  entityUpdate: Partial<EntityUpdate<Builder>>,
  params?: Partial<Dynamo.UpdateCommandInput> & { emitEvent?: boolean }
) => Promise<Entity<Builder>>;

export type RecoverItemFn<Builder extends EntityBuilder> = (
  key: EntityBuilder<Builder>['key'],
  params?: Dynamo.GetCommandInput & { emitEvent?: boolean }
) => Promise<Entity<Builder>>;

export type ScanTableFn<Builder extends EntityBuilder> = (
  queryParams: { limit: number; nextToken?: string },
  params?: Partial<Dynamo.ScanCommandInput>
) => Promise<PaginatedResponse<Entity<Builder>>>;

export type ListIndexFn<Builder extends EntityBuilder, Table extends TableBuilder> = (
  index: valueof<Table['indexes']>,
  queryParams: { limit: number; nextToken?: string },
  params?: Partial<Dynamo.QueryCommandInput>
) => Promise<PaginatedResponse<Entity<Builder>>>;

export type valueof<T> = T[keyof T];
