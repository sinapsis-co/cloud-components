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

import { Model } from '../../../model';
import { dynamodb } from './client';
import { entityDeserialize, entitySerialized } from './mappers';
import { IndexReq, OperationConfig } from './types/config';
import { Repository } from './types/repository';
import { TableStoreBuilder } from './types/table-store-builder';

export const repository = <T extends TableStoreBuilder, M extends Model>(
  table: typeof TableStoreBuilder<T['keyMapping']['PK'], T['keyMapping']['SK'], keyof T['indexes']>,
  repoConfig: IndexReq<T, M>
): Repository<TableStoreBuilder, M> => {
  const operationConfig: OperationConfig<T, M> = {
    type: repoConfig.type,
    tableName: repoConfig.tableName,
    keySerialize: repoConfig.keySerialize,
    entityDeserialize: entityDeserialize<M>(table),
    entitySerialized: entitySerialized(repoConfig, table),
    dynamoClient: dynamodb,
  };
  return {
    tableName: repoConfig.tableName,
    events: {
      created: { name: `app.${repoConfig.type}.created`, source: 'app' },
      updated: { name: `app.${repoConfig.type}.updated`, source: 'app' },
      deleted: { name: `app.${repoConfig.type}.deleted`, source: 'app' },
      recovered: { name: `app.${repoConfig.type}.recovered`, source: 'app' },
    },
    keySerialize: repoConfig.keySerialize,
    entitySerialized: entitySerialized(repoConfig, table),
    entityDeserialize: entityDeserialize<M>(table),
    createItem: createItem(operationConfig),
    checkItemExists: checkItemExists(operationConfig),
    getItem: getItem(operationConfig),
    listItem: listItem(operationConfig),
    deleteItem: deleteItem(operationConfig),
    updateItem: updateItem(operationConfig),
    batchCreateItem: batchCreateItem(operationConfig),
    batchGetItem: batchGetItem(operationConfig),
    softDeleteItem: softDeleteItem(operationConfig),
    recoverItem: recoverItem(operationConfig),
    scanTable: scanTable(operationConfig),
    listIndex: listIndex(operationConfig),
  };
};
