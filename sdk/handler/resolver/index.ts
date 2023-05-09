import { Context, DynamoDBGetItemRequest, DynamoDBPutItemRequest, DynamoDBScanRequest } from '@aws-appsync/utils';
import { TableStoreBuilder } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/table-store-builder';
import { Model } from 'model';

// Generals

export type KeySerialize<T extends TableStoreBuilder, M extends Model> = (key: M['Key']) => T['keyMapping'];
export type EntityDeserialize<T extends TableStoreBuilder, M extends Model> = (
  entityStore: M['Entity'] & T['keyMapping']
) => M['Entity'];

export type PaginatedInput = { limit?: number; nextToken?: string };

export type DispatchContextReq<EBuilder extends Model['Events']> = (ctx: Context<{ input: EBuilder }>) => any;

// Create
export type CreateContextReq<M extends Model> = (ctx: Context<{ input: M['Create'] }>) => DynamoDBPutItemRequest;

export type CreateContextRes<M extends Model> = (ctx: Context<any, any, any, any, M['Entity']>) => M['Entity'];

// Get
export type GetContextReq<M extends Model> = (ctx: Context<M['Key']>) => DynamoDBGetItemRequest;

export type GetContextRes<M extends Model> = (ctx: Context<any, any, any, any, M['Entity']>) => M['Entity'];

// List
export type ScanContextReq = (ctx: Context<{ input: PaginatedInput }>) => DynamoDBScanRequest;

export type ListContextRes<M extends Model> = (
  ctx: Context<any, any, any, any, { items: M['Entity'][]; nextToken: string | number | null }>
) => Model['List'];
