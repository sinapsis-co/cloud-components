import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { EntityBuilder, ReadOnlyRepositoryConfig, RepositoryConfig } from '../interface';
import { ListIndexFn } from '../op-interface';
import { TableBuilder } from '../table-builder';
export declare const listIndex: <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(repoConfig: RepositoryConfig<Builder, Table> | ReadOnlyRepositoryConfig<Builder, Table>, dynamodb: DynamoDBDocumentClient) => ListIndexFn<Builder, Table>;
