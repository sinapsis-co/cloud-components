import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { EntityBuilder, ReadOnlyRepository, ReadOnlyRepositoryConfig, Repository, RepositoryConfig } from './interface';
import { TableBuilder } from './table-builder';
export declare const dynamodb: DynamoDBDocumentClient;
export declare const repository: <Builder extends EntityBuilder, Table extends TableBuilder>(repoConfig: RepositoryConfig<Builder, Table>) => Repository<Builder, Table>;
export declare const readOnlyRepository: <Builder extends EntityBuilder, Table extends TableBuilder>(repoConfig: ReadOnlyRepositoryConfig<Builder, Table>) => ReadOnlyRepository<Builder, Table>;
export declare const parseTableName: (tableName: string) => string;
