import { ConditionCheck, Delete, Put, Update } from '@aws-sdk/client-dynamodb';
import { KeysAndAttributes } from '@aws-sdk/client-dynamodb/dist-types/models/models_0';
import * as Dynamo from '@aws-sdk/lib-dynamodb';
import { NativeAttributeValue } from '@aws-sdk/util-dynamodb/dist-types/models';
import { PaginatedResponse } from 'catalog/api';
import { Model } from 'model';
import { TableStoreBuilder } from './table-store-builder';

export type TransactWriteFn<M extends Model> = (ops: BatchOps<M>) => Promise<void>;

export type BatchGetFn<M extends Model, T extends TableStoreBuilder> = (
  keys: T['keyMapping'][],
  params?: Omit<KeysAndAttributes, 'Keys'> & { AutoRetry?: boolean }
) => Promise<(M['Entity'] | undefined)[]>;

export type BatchWriteFn<M extends Model> = (ops: Omit<BatchOps<M>, 'updateItems' | 'conditionCheck'>) => Promise<void | void[]>;

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

export type QueryIndexFn<M extends Model, GenericIndexName extends string | number | symbol, AttIndexName extends string | number | symbol> = (
  index: GenericIndexName | AttIndexName,
  keyCondition: string,
  attributesMap: Record<string, any>,
  queryParams?: { limit?: string; nextToken?: string },
  params?: Partial<Dynamo.QueryCommandInput>
) => Promise<PaginatedResponse<M['Entity']>>;

export type BatchOps<M extends Model> = {
  conditionCheck?: {
    key: TableStoreBuilder['keyMapping'];
    ConditionExpression: string;
    params?: Partial<
      Omit<ConditionCheck, 'Key' | 'ExpressionAttributeValues'> & {
        Key: Record<string, NativeAttributeValue> | undefined;
        ExpressionAttributeValues?: Record<string, NativeAttributeValue>;
      }
    >;
  };
  putItems?: {
    entity: M['Entity'];
    params?: Partial<
      Omit<Put, 'Key' | 'ExpressionAttributeValues'> & {
        Key: Record<string, NativeAttributeValue> | undefined;
        ExpressionAttributeValues?: Record<string, NativeAttributeValue>;
      }
    >;
  }[];
  updateItems?: {
    key: TableStoreBuilder['keyMapping'];
    body: Partial<M['Body']>;
    params?: Partial<
      Omit<Update, 'Key' | 'ExpressionAttributeValues'> & {
        Key: Record<string, NativeAttributeValue> | undefined;
        ExpressionAttributeValues?: Record<string, NativeAttributeValue>;
      }
    >;
  }[];
  deleteItems?: {
    key: TableStoreBuilder['keyMapping'];
    params?: Partial<
      Omit<Delete, 'Key' | 'ExpressionAttributeValues'> & {
        Key: Record<string, NativeAttributeValue> | undefined;
        ExpressionAttributeValues?: Record<string, NativeAttributeValue>;
      }
    >;
  }[];
};
