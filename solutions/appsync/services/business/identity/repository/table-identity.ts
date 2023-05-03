import { TableStoreBuilder } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/table-store-builder';

export type IdentityTableBuilder = TableStoreBuilder<{
  tableName: 'identity';
  indexes: { email: { pk: 'email' } };
  keyMapping: {
    pk: string;
    sk: string;
  };
}>;

export const identityTableBuilder: IdentityTableBuilder = {
  tableName: 'identity',
  indexes: { email: { pk: 'email' } },
  keyMapping: { pk: 'S', sk: 'S' },
};
