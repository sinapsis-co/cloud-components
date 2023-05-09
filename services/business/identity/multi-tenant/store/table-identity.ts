import { TableStoreBuilder } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/table-store-builder';

export class IdentityStoreTable implements TableStoreBuilder {
  readonly tableName = 'identity';
  // readonly indexes = { GSI_1: { PK: 'GSI_1_PK' } };
  readonly keyMapping = {
    PK: 'PK',
    SK: 'SK',
  };
}
