import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { EntityBuilder, RepositoryConfig } from '../interface';
import { UpdateItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';
export declare const updateItem: <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(repoConfig: RepositoryConfig<Builder, Table>, dynamodb: DynamoDBDocumentClient) => UpdateItemFn<Builder>;
