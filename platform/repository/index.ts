import DynamoDB from 'aws-sdk/clients/dynamodb';
import { batchCreateItem } from './operations/batch-create';
import { batchGetItem } from './operations/batch-get';
import { createItem } from './operations/create';
import { deleteItem } from './operations/delete';
import { getItem } from './operations/get';
import { listItem } from './operations/list';
import { recoverItem } from './operations/recover';
import { softDeleteItem } from './operations/soft-delete';
import { scanTable } from './operations/scan';
import { updateItem } from './operations/update';
import { checkItemExists } from './operations/check-item-exists';
import { logicalDeleteItem } from './operations/logical-delete';

import { EntityBuilder, EntityRepositoryConfig, Repository } from './interface';

const dynamodb = new DynamoDB.DocumentClient();

export const repository = <Builder extends EntityBuilder>(
  repoConfig: EntityRepositoryConfig<Builder>
): Repository<Builder> => {
  return {
    events: {
      created: { name: `app.${repoConfig.repoName}.created`, source: 'app' },
      updated: { name: `app.${repoConfig.repoName}.updated`, source: 'app' },
      deleted: { name: `app.${repoConfig.repoName}.deleted`, source: 'app' },
    },
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
    logicalDeleteItem: logicalDeleteItem(repoConfig, dynamodb),
    recoverItem: recoverItem(repoConfig, dynamodb),
    scanTable: scanTable(repoConfig, dynamodb),
  };
};
