import { TableStoreBuilder } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/table-store-builder';

export class IdentityStoreTable implements TableStoreBuilder {
  readonly tableName = 'identity';
  readonly indexes = { gsi1: { pk: 'gsi1PK' } };
  readonly keyMapping = {
    pk: 'pk',
    sk: 'sk',
  };
}
