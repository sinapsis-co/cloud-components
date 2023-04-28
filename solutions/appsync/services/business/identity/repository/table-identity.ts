import { TableBuilder } from '@sinapsis-co/cc-sdk/integration/database/dynamo/table-builder';

export type IdentityTable = TableBuilder<{
  tableName: 'identity';
  indexes: ['email'];
  ttlAttribute: true;
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

export const identityTableBuilder: IdentityTable = {
  tableName: 'identity',
  indexes: ['email'],
  ttlAttribute: true,
  storeMapping: {
    key: { pk: 'S', sk: 'S' },
    timers: { createdAt: 'S', updatedAt: 'S' },
  },
};
