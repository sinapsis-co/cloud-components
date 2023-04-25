import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { EntityBuilder, RepositoryConfig } from '../interface';
import { RecoverItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';
export declare const recoverItem: <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder>(repoConfig: RepositoryConfig<Builder, Table>, dynamodb: DynamoDBDocumentClient) => RecoverItemFn<Builder>;
