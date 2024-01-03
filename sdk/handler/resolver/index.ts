import {
  Context,
  DynamoDBGetItemRequest,
  DynamoDBPutItemRequest,
  DynamoDBQueryRequest,
  DynamoDBScanRequest,
  DynamoDBTransactWriteItemsRequest,
} from '@aws-appsync/utils';
import { IndexSerializeOutput } from 'integration/store/dynamo/types/config';
import { TableStoreBuilder } from 'integration/store/dynamo/types/table-store-builder';
import { Model } from 'model';

// Generals

export type ItemCreate<M extends Model> = (
  key: M['Key'],
  body: M['Body'],
  params?: Partial<DynamoDBPutItemRequest>
) => DynamoDBPutItemRequest;

export type KeySerialize<T extends TableStoreBuilder, M extends Model> = (key: M['Key']) => T['keyMapping'];

export type IndexSerialize<T extends TableStoreBuilder, M extends Model> = (
  key: M['Entity']
) => IndexSerializeOutput<T>;

export type EntityDeserialize<T extends TableStoreBuilder, M extends Model> = (
  entityStore: M['Entity'] & T['keyMapping']
) => M['Entity'];

export type PaginatedInput = { limit?: number; nextToken?: string };

export type DispatchReqContext<M extends Model> = (ctx: Context<{ input: M['Events'] }>) => any;

// Create
export type CreateReqContext<M extends Model | Record<string, any>> = (
  ctx: Context<{ input: M extends Model ? M['Create'] : M }>
) => DynamoDBPutItemRequest | DynamoDBTransactWriteItemsRequest;

export type CreateResContext<M extends Model | Record<string, any>> = (
  ctx: Context<any, any, any, any, M extends Model ? M['Entity'] : M>
) => M extends Model ? M['Entity'] : M;

// Get
export type GetReqContext<M extends Model> = (ctx: Context<M['Key']>) => DynamoDBGetItemRequest;

export type GetResContext<M extends Model | Record<string, any>> = (
  ctx: Context<any, any, any, any, M extends Model ? M['Entity'] : M>
) => M extends Model ? M['Entity'] : M;

// List
export type ListReqContext<M extends Record<string, any> | PaginatedInput> = (
  ctx: Context<{ input: M }>
) => DynamoDBScanRequest | DynamoDBQueryRequest;

export type ListResContext<M extends Model | Record<string, any>> = (
  ctx: Context<
    any,
    any,
    any,
    any,
    { items: M extends Model ? Model['Entity'][] : M[]; nextToken: string | number | null }
  >
) => M extends Model ? Model['List'] : M;
