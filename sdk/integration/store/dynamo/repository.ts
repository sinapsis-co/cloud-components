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

import { EntityBuilder } from '../../../model';
import { dynamodb } from './client';
import { RepositoryConfig } from './types/config';
import { Repository } from './types/repository';
import { TableStoreBuilder } from './types/table-store-builder';

export const repository = <Builder extends EntityBuilder, Table extends TableStoreBuilder>(
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
