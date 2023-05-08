import * as Dynamo from '@aws-sdk/lib-dynamodb';
import { PaginatedResponse } from 'catalog/api';
import { Model } from 'model';
import { TimeToDelete } from '../operations/soft-delete';

export type CreateItemFn<M extends Model> = (
  key: M['Key'],
  body: M['Body'],
  params?: Partial<Dynamo.PutCommandInput> & { emitEvent?: boolean; allowOverwrite?: boolean }
) => Promise<M['Entity']>;

export type BatchCreateItemFn<M extends Model> = (
  items: {
    key: M['Key'];
    body: M['Body'];
  }[],
  autoRetry?: boolean
) => Promise<M['Entity'][]>;

export type CheckItemExistsFn<M extends Model> = (
  key: M['Key'],
  params?: Partial<Dynamo.GetCommandInput>
) => Promise<{ exists: boolean; entity?: M['Entity'] }>;

export type GetItemFn<M extends Model> = (
  key: M['Key'],
  params?: Partial<Dynamo.GetCommandInput>
) => Promise<M['Entity']>;

export type BatchGetItemFn<M extends Model> = (
  keys: M['Key'][],
  autoRetry?: boolean
) => Promise<M['Entity'][] | undefined[]>;

export type ListItemFn<M extends Model> = (
  pk: string,
  queryParams: { limit: number; nextToken?: string },
  params?: Partial<Dynamo.QueryCommandInput>
) => Promise<PaginatedResponse<M['Entity']>>;

export type DeleteItemFn<M extends Model> = (
  key: M['Key'],
  params?: Partial<Dynamo.DeleteCommandInput> & { emitEvent?: boolean }
) => Promise<M['Entity']>;

export type SoftDeleteItemFn<M extends Model> = (
  key: M['Key'],
  params?: Dynamo.UpdateCommandInput & { deleteAfter?: TimeToDelete; emitEvent?: boolean },
  deleteAfter?: TimeToDelete
) => Promise<M['Entity']>;

export type UpdateItemFn<M extends Model> = (
  key: M['Key'],
  body: Partial<M['Body']>,
  params?: Partial<Dynamo.UpdateCommandInput> & { emitEvent?: boolean }
) => Promise<M['Entity']>;

export type RecoverItemFn<M extends Model> = (
  key: M['Key'],
  params?: Dynamo.GetCommandInput & { emitEvent?: boolean }
) => Promise<M['Entity']>;

export type ScanTableFn<M extends Model> = (
  queryParams: { limit: number; nextToken?: string },
  params?: Partial<Dynamo.ScanCommandInput>
) => Promise<M['List']>;

export type ListIndexFn<M extends Model> = (
  index: keyof M['StoreBuilder']['indexes'],
  queryParams: { limit: number; nextToken?: string },
  params?: Partial<Dynamo.QueryCommandInput>
) => Promise<M['List']>;
