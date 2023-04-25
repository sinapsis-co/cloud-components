import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { EntityBuilder, ReadOnlyRepositoryConfig, RepositoryConfig } from '../interface';
import { ScanTableFn } from '../op-interface';
import { TableBuilder } from '../table-builder';
export declare const scanTable: <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(repoConfig: RepositoryConfig<Builder, Table> | ReadOnlyRepositoryConfig<Builder, Table>, dynamodb: DynamoDBDocumentClient) => ScanTableFn<Builder>;
