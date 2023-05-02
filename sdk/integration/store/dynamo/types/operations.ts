import * as Dynamo from '@aws-sdk/lib-dynamodb';
import { PaginatedResponse } from 'catalog/api';
import { Entity, EntityBuilder, EntityCreate, EntityKey, EntityUpdate } from '../../../../model';
import { TimeToDelete } from '../operations/soft-delete';
import { TableStoreBuilder } from './table-store-builder';

export type CreateItemFn<Builder extends EntityBuilder> = (
  key: EntityKey<Builder>,
  entityCreate: EntityCreate<Builder>,
  params?: Partial<Dynamo.PutCommandInput> & { emitEvent?: boolean }
) => Promise<Entity<Builder>>;

export type BatchCreateItemFn<Builder extends EntityBuilder> = (
  Commands: {
    key: EntityKey<Builder>;
    entityCreate: EntityCreate<Builder>;
  }[],
  autoRetry?: boolean
) => Promise<Entity<Builder>[]>;

export type CheckItemExistsFn<Builder extends EntityBuilder> = (
  key: EntityKey<Builder>,
  params?: Partial<Dynamo.GetCommandInput>
) => Promise<{ exists: boolean; entity?: Entity<Builder> }>;

export type GetItemFn<Builder extends EntityBuilder> = (
  key: EntityKey<Builder>,
  params?: Partial<Dynamo.GetCommandInput>
) => Promise<Entity<Builder>>;

export type BatchGetItemFn<Builder extends EntityBuilder> = (
  keys: EntityKey<Builder>[],
  autoRetry?: boolean
) => Promise<Entity<Builder>[] | undefined[]>;

export type ListItemFn<Builder extends EntityBuilder> = (
  pk: string,
  queryParams: { limit: number; nextToken?: string },
  params?: Partial<Dynamo.QueryCommandInput>
) => Promise<PaginatedResponse<Entity<Builder>>>;

export type DeleteItemFn<Builder extends EntityBuilder> = (
  key: EntityKey<Builder>,
  params?: Partial<Dynamo.DeleteCommandInput> & { emitEvent?: boolean }
) => Promise<Entity<Builder>>;

export type SoftDeleteItemFn<Builder extends EntityBuilder> = (
  key: EntityKey<Builder>,
  params?: Dynamo.UpdateCommandInput & { deleteAfter?: TimeToDelete; emitEvent?: boolean },
  deleteAfter?: TimeToDelete
) => Promise<Entity<Builder>>;

export type UpdateItemFn<Builder extends EntityBuilder> = (
  key: EntityKey<Builder>,
  entityUpdate: EntityUpdate<Builder>,
  params?: Partial<Dynamo.UpdateCommandInput> & { emitEvent?: boolean }
) => Promise<Entity<Builder>>;

export type RecoverItemFn<Builder extends EntityBuilder> = (
  key: EntityKey<Builder>,
  params?: Dynamo.GetCommandInput & { emitEvent?: boolean }
) => Promise<Entity<Builder>>;

export type ScanTableFn<Builder extends EntityBuilder> = (
  queryParams: { limit: number; nextToken?: string },
  params?: Partial<Dynamo.ScanCommandInput>
) => Promise<PaginatedResponse<Entity<Builder>>>;

export type ListIndexFn<Builder extends EntityBuilder, Table extends TableStoreBuilder> = (
  index: keyof Table['indexes'],
  queryParams: { limit: number; nextToken?: string },
  params?: Partial<Dynamo.QueryCommandInput>
) => Promise<PaginatedResponse<Entity<Builder>>>;
