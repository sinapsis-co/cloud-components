import { listItem } from './operations/list';
import { listIndex } from './operations/list-index';
import { scanTable } from './operations/scan';

import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { Tracing } from 'tracing';
import { EntityBuilder } from '../../../model';
import { ViewConfig } from './types/repository';
import { TableStoreBuilder } from './types/table-store-builder';
import { View } from './types/view';

const client: DynamoDBClient = Tracing.captureIntegration(new DynamoDBClient({}) as any);
export const dynamodb = DynamoDBDocumentClient.from(client);

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
