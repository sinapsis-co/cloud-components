import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { EntityBuilder, ReadOnlyRepositoryConfig, RepositoryConfig } from '../interface';
import { BatchGetItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';
export type BatchGetItemParams = {
    autoRetry?: true;
    tableName?: string;
};
export declare const batchGetItem: <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(repoConfig: RepositoryConfig<Builder, Table> | ReadOnlyRepositoryConfig<Builder, Table>, dynamodb: DynamoDBDocumentClient, params?: BatchGetItemParams) => BatchGetItemFn<Builder>;
