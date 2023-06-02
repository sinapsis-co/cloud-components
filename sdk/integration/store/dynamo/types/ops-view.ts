import { ConditionCheck, Delete, Put, Update } from '@aws-sdk/client-dynamodb';
import * as Dynamo from '@aws-sdk/lib-dynamodb';
import { PaginatedResponse } from 'catalog/api';
import { Model } from 'model';
import { TableStoreBuilder } from './table-store-builder';

export type TransactWriteFn<M extends Model> = (ops: BatchOps<M>) => Promise<void>;

export type BatchGetFn<M extends Model, T extends TableStoreBuilder> = (
  keys: T['keyMapping'][],
  autoRetry?: boolean
) => Promise<M['Entity'][] | undefined[]>;

export type BatchWriteFn<M extends Model> = (
  ops: Omit<BatchOps<M>, 'updateItems' | 'conditionCheck'>
) => Promise<void | void[]>;

export type ScanFn<M extends Model> = (
  queryParams?: { limit?: string; nextToken?: string },
  params?: Partial<Dynamo.ScanCommandInput>
) => Promise<M['List']>;

export type QueryFn<M extends Model> = (
  keyCondition: string,
  attributesMap: Record<string, any>,
  queryParams?: { limit?: string; nextToken?: string },
  params?: Partial<Dynamo.QueryCommandInput>
) => Promise<PaginatedResponse<M['Entity']>>;

export type QueryIndexFn<
  M extends Model,
  GenericIndexName extends string | number | symbol,
  AttIndexName extends string | number | symbol
> = (
  index: GenericIndexName | AttIndexName,
  keyCondition: string,
  attributesMap: Record<string, any>,
  queryParams?: { limit?: string; nextToken?: string },
  params?: Partial<Dynamo.QueryCommandInput>
) => Promise<PaginatedResponse<M['Entity']>>;

export type BatchOps<M extends Model> = {
  conditionCheck?: { key: M['Key']; ConditionExpression: string; params?: Omit<ConditionCheck, 'TableName' | 'Key'> };
  putItems?: { entity: M['Entity']; params?: Omit<Put, 'TableName' | 'Item'> }[];
  updateItems?: {
    key: M['Key'];
    body: Partial<M['Body']>;
    params?: Omit<Update, 'TableName' | 'Key' | 'UpdateExpression'>;
  }[];
  deleteItems?: { key: M['Key']; params?: Omit<Delete, 'TableName' | 'Key'> }[];
};
