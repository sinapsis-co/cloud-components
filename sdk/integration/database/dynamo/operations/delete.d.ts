import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { EntityBuilder, RepositoryConfig } from '../interface';
import { DeleteItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';
export declare const deleteItem: <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(repoConfig: RepositoryConfig<Builder, Table>, dynamodb: DynamoDBDocumentClient) => DeleteItemFn<Builder>;
