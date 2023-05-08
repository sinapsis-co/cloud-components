import { listItem } from './operations/list';
import { listIndex } from './operations/list-index';
import { scanTable } from './operations/scan';

import { Model } from '../../../model';
import { dynamodb } from './client';
import { entityDeserialize } from './mappers';
import { OperationConfigView, ViewConfig } from './types/config';
import { TableStoreBuilder } from './types/table-store-builder';
import { View } from './types/view';

export const view = <M extends Model>(table: typeof TableStoreBuilder<any>, repoConfig: ViewConfig<M>): View<M> => {
  const operationConfig: OperationConfigView<M> = {
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
