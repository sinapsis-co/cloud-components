import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { EntityBuilder, ReadOnlyRepositoryConfig, RepositoryConfig } from '../interface';
import { GetItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';
export declare const getItem: <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(repoConfig: RepositoryConfig<Builder, Table> | ReadOnlyRepositoryConfig<Builder, Table>, dynamodb: DynamoDBDocumentClient) => GetItemFn<Builder>;
