import { listItem } from './operations/list';
import { listIndex } from './operations/list-index';
import { scanTable } from './operations/scan';

import { EntityBuilder } from '../../../model';
import { dynamodb } from './client';
import { ViewConfig } from './types/config';
import { TableStoreBuilder } from './types/table-store-builder';
import { View } from './types/view';

export const view = <Builder extends EntityBuilder, Table extends TableStoreBuilder>(
  repoConfig: ViewConfig<Builder, Table>
): View<Builder, Table> => {
  return {
    entityDeserialize: repoConfig.entityDeserialize,
    listItem: listItem(repoConfig, dynamodb),
    scanTable: scanTable(repoConfig, dynamodb),
    listIndex: listIndex(repoConfig, dynamodb),
  };
};
