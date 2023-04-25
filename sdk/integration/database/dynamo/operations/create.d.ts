import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { EntityBuilder, EntityCreate, RepositoryConfig } from '../interface';
import { CreateItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';
export declare const createItem: <Builder extends EntityBuilder, Table extends TableBuilder = TableBuilder, Omitted extends keyof Builder["body"] = "">(repoConfig: RepositoryConfig<Builder, Table, EntityCreate<Builder, Omitted>>, dynamodb: DynamoDBDocumentClient) => CreateItemFn<Builder, EntityCreate<Builder, Omitted>>;
