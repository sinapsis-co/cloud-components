import { createItem } from './ops-repo/item-create';
import { deleteItem } from './ops-repo/item-delete';
import { checkItemExists } from './ops-repo/item-exists';
import { getItem } from './ops-repo/item-get';
import { recoverItem } from './ops-repo/item-recover';
import { softDeleteItem } from './ops-repo/item-soft-delete';
import { updateItem } from './ops-repo/item-update';
import { batchCreateItem } from './ops-repo/items-batch-create';
import { batchGetItem } from './ops-repo/items-batch-get';
import { listItem } from './ops-repo/items-list';

import { Model } from 'model';
import { dynamodb } from './client';
import { listIndex } from './ops-repo/index-list';
import { query } from './ops-view/query';
import { queryIndex } from './ops-view/query-index';
import { scan } from './ops-view/scan';
import { transactWrite } from './ops-view/transact-write';
import { IndexReq, RepoOpConfig } from './types/config';
import { Repository } from './types/repo';
import { TableStoreBuilder } from './types/table-store-builder';
import { entityDeserialize, entitySerialized, indexPkMapping } from './util/mappers';
import { parseTableName } from './util/parse-name';

export const repository = <T extends TableStoreBuilder, M extends Model>(
  table: typeof TableStoreBuilder<T['keyMapping']['PK'], T['keyMapping']['SK'], keyof T['genericIndexes']>,
  repoConfig: IndexReq<T, M>
): Repository<T, M> => {
  const operationConfig: RepoOpConfig<T, M> = {
    type: repoConfig.type,
    dynamoClient: dynamodb,
    tableName: repoConfig.tableName,
    dynamoTableNameEnvVar: repoConfig.dynamoTableNameEnvVar || parseTableName(repoConfig.tableName),
    keySerialize: repoConfig.keySerialize,
    genericIndexSerialize: repoConfig.genericIndexSerialize,
    entityDeserialize: entityDeserialize<M>(table),
    indexPkMapping: indexPkMapping(table),
    entitySerialized: entitySerialized(repoConfig, table),
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
    entitySerialize: entitySerialized(repoConfig, table),
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
    listIndex: listIndex(operationConfig),
    transactWrite: transactWrite(operationConfig),
    query: query(operationConfig),
    queryIndex: queryIndex(operationConfig),
    scan: scan(operationConfig),
  };
};
