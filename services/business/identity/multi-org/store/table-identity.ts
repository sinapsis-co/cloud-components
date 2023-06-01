import { TableStoreBuilder } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/table-store-builder';

export class IdentityStoreTable implements TableStoreBuilder {
  readonly tableName = 'identity';
  readonly keyMapping = {
    PK: 'PK',
    SK: 'SK',
  };
  readonly attIndexes = { GSI_1: { PK: 'SK', SK: 'PK' } };
}
