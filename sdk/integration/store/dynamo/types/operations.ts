import { Delete, Put, Update } from '@aws-sdk/client-dynamodb';
import * as Dynamo from '@aws-sdk/lib-dynamodb';
import { PaginatedResponse } from 'catalog/api';
import { Model } from 'model';
import { TimeToDelete } from '../operations/soft-delete';
import { TableStoreBuilder } from './table-store-builder';

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

export type ListIndexFn<M extends Model, T extends TableStoreBuilder> = (
  // index: keyof M['StoreBuilder']['indexes'],
  index: keyof T['indexes'],
  queryParams: { limit: number; nextToken?: string },
  params?: Partial<Dynamo.QueryCommandInput>
) => Promise<M['List']>;

type Ops<M extends Model> = {
  putItems?: { entity: M['Entity']; params?: Omit<Put, 'TableName' | 'Item'> }[];
  updateItems?: {
    key: M['Key'];
    body: Partial<M['Body']>;
    params?: Omit<Update, 'TableName' | 'Key' | 'UpdateExpression'>;
  }[];
  deleteItems?: { key: M['Key']; params?: Omit<Delete, 'TableName' | 'Key'> }[];
};

export type TransactWriteFn<M extends Model> = ({ putItems, updateItems, deleteItems }: Ops<M>) => Promise<void>;
