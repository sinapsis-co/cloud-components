import { listItem } from './operations/list';
import { listIndex } from './operations/list-index';
import { scanTable } from './operations/scan';

import { Model } from '../../../model';
import { dynamodb } from './client';
import { entityDeserialize } from './mappers';
import { OperationConfigView, ViewConfig } from './types/config';
import { TableStoreBuilder } from './types/table-store-builder';
import { View } from './types/view';

export const view = <T extends TableStoreBuilder, M extends Model>(
  table: typeof TableStoreBuilder<T['keyMapping']['PK'], T['keyMapping']['SK'], keyof T['indexes']>,
  repoConfig: ViewConfig<T>
): View<T, M> => {
  const operationConfig: OperationConfigView<T, M> = {
    tableName: repoConfig.tableName,
    entityDeserialize: entityDeserialize<M>(table),
    dynamoClient: dynamodb,
  };
  return {
    entityDeserialize: entityDeserialize<M>(table),
    listItem: listItem(operationConfig),
    scanTable: scanTable(operationConfig),
    listIndex: listIndex(operationConfig),
  };
};
