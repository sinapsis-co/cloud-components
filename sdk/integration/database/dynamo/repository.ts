import { batchCreateItem } from './operations/batch-create';
import { batchGetItem } from './operations/batch-get';
import { checkItemExists } from './operations/check-item-exists';
import { createItem } from './operations/create';
import { deleteItem } from './operations/delete';
import { getItem } from './operations/get';
import { listItem } from './operations/list';
import { listIndex } from './operations/list-index';
import { recoverItem } from './operations/recover';
import { scanTable } from './operations/scan';
import { softDeleteItem } from './operations/soft-delete';
import { updateItem } from './operations/update';

import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { Tracing } from 'tracing';
import { EntityBuilder } from '../../../model';
import { Repository, RepositoryConfig } from './types/repository';
import { TableBuilder } from './types/table-builder';

const client: DynamoDBClient = Tracing.captureIntegration(new DynamoDBClient({}) as any);
export const dynamodb = DynamoDBDocumentClient.from(client);

export const repository = <Builder extends EntityBuilder, Table extends TableBuilder>(
  repoConfig: RepositoryConfig<Builder, Table>
): Repository<Builder, Table> => {
  return {
    events: {
      created: { name: `app.${repoConfig.repoName}.created`, source: 'app' },
      updated: { name: `app.${repoConfig.repoName}.updated`, source: 'app' },
      deleted: { name: `app.${repoConfig.repoName}.deleted`, source: 'app' },
      recovered: { name: `app.${repoConfig.repoName}.recovered`, source: 'app' },
    },
    keySerialize: repoConfig.keySerialize,
    entitySerialize: repoConfig.entitySerialize,
    entityDeserialize: repoConfig.entityDeserialize,
    createItem: createItem(repoConfig, dynamodb),
    checkItemExists: checkItemExists(repoConfig, dynamodb),
    getItem: getItem(repoConfig, dynamodb),
    listItem: listItem(repoConfig, dynamodb),
    deleteItem: deleteItem(repoConfig, dynamodb),
    updateItem: updateItem(repoConfig, dynamodb),
    batchCreateItem: batchCreateItem(repoConfig, dynamodb),
    batchGetItem: batchGetItem(repoConfig, dynamodb),
    softDeleteItem: softDeleteItem(repoConfig, dynamodb),
    recoverItem: recoverItem(repoConfig, dynamodb),
    scanTable: scanTable(repoConfig, dynamodb),
    listIndex: listIndex(repoConfig, dynamodb),
  };
};
