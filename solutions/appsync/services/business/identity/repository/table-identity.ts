import { TableStoreBuilder } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/table-store-builder';

export type IdentityTableBuilder = TableStoreBuilder<{
  tableName: 'identity';
  indexes: { email: { pk: 'email' } };
  storeMapping: {
    key: {
      pk: string;
      sk: string;
    };
    timers: {
      createdAt: string;
      updatedAt: string;
    };
  };
}>;

export const identityTableBuilder: IdentityTableBuilder = {
  tableName: 'identity',
  indexes: { email: { pk: 'email' } },
  storeMapping: {
    key: { pk: 'S', sk: 'S' },
    timers: { createdAt: 'S', updatedAt: 'S' },
  },
};
