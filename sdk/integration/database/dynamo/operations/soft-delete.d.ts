import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import * as _interface from '../interface';
import { SoftDeleteItemFn } from '../op-interface';
import { TableBuilder } from '../table-builder';
export declare const softDeleteItem: <Builder extends _interface.EntityBuilder<_interface.EntityBuilderKeys>, Table extends TableBuilder = TableBuilder>(repoConfig: _interface.RepositoryConfig<Builder, Table, _interface.EntityCreate<Builder, "">>, dynamodb: DynamoDBDocumentClient) => SoftDeleteItemFn<Builder>;
