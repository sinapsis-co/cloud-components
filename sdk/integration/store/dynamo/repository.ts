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
import { entityDeserialize, indexParsing } from './mappers';
import { OperationConfig, RepositoryConfig } from './types/config';
import { Repository } from './types/repository';
import { TableStoreBuilder } from './types/table-store-builder';

type IndexReq<M extends Model> = M['StoreBuilder']['indexes'] extends Record<any, { pk: string; sk?: string }>
  ? RepositoryConfig<M> & Required<Pick<RepositoryConfig<M>, 'indexSerialize'>>
  : RepositoryConfig<M>;

export const repository = <M extends Model>(
  table: typeof TableStoreBuilder<any>,
  repoConfig: IndexReq<M>
): Repository<M> => {
  const operationConfig: OperationConfig<M> = {
    type: repoConfig.type,
    tableName: repoConfig.tableName,
    keySerialize: repoConfig.keySerialize,
    entityDeserialize: entityDeserialize<M>(table),
    indexSerialize: indexParsing(repoConfig.indexSerialize, table),
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
