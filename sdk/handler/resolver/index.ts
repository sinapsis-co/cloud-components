import { Context, DynamoDBGetItemRequest, DynamoDBPutItemRequest, DynamoDBScanRequest } from '@aws-appsync/utils';
import { TableStoreBuilder } from 'integration/store/dynamo/types/table-store-builder';
import { Entity, EntityBuilder, EntityList, EntityStore, Model } from 'model';

export type PaginatedInput = { limit?: number; nextToken?: string };

export type DispatchContextReq<EBuilder extends Model['Events']> = (ctx: Context<{ input: EBuilder }>) => any;

// Create
export type CreateContextReq<EBuilder extends EntityBuilder> = (
  ctx: Context<{ input: EntityBuilder<EBuilder>['body'] }>
) => DynamoDBPutItemRequest;

export type CreateContextRes<EBuilder extends EntityBuilder, TSBuilder extends TableStoreBuilder> = (
  ctx: Context<any, any, any, any, EntityStore<EBuilder, TSBuilder>>
) => Entity<EBuilder>;

// Get
export type GetContextReq<EBuilder extends EntityBuilder> = (
  ctx: Context<EntityBuilder<EBuilder>['key']>
) => DynamoDBGetItemRequest;

export type GetContextRes<EBuilder extends EntityBuilder, TSBuilder extends TableStoreBuilder> = (
  ctx: Context<any, any, any, any, EntityStore<EBuilder, TSBuilder>>
) => Entity<EBuilder>;

// List
export type ScanContextReq = (ctx: Context<{ input: PaginatedInput }>) => DynamoDBScanRequest;

export type ListContextRes<EBuilder extends EntityBuilder, TSBuilder extends TableStoreBuilder> = (
  ctx: Context<any, any, any, any, { items: EntityStore<EBuilder, TSBuilder>[]; nextToken: string | number | null }>
) => EntityList<EBuilder>;
