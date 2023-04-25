import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { EntityBuilder, RepositoryConfig } from '../interface';
import { BatchCreateItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';
export type BatchCreateItemParams = {
    autoRetry?: true;
    tableName?: string;
};
export declare const batchCreateItem: <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(repoConfig: RepositoryConfig<Builder, Table>, dynamodb: DynamoDBDocumentClient, params?: BatchCreateItemParams) => BatchCreateItemFn<Builder>;
