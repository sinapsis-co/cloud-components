import { TableStoreBuilder } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/table-store-builder';

export class IdentityTableBuilder implements TableStoreBuilder {
  tableName = 'identity';
  indexes = { email: { pk: 'email' } };
  keyMapping = {
    pk: 'pk',
    sk: 'pk',
  };
}
