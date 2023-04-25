import { TableBuilder } from '@sinapsis-co/cc-sdk/integration/database/dynamo/table-builder';

export type SingleTable = TableBuilder<{
  tableName: 'single';
  indexes: [];
  ttlAttribute: false;
  storeMapping: {
    key: {
      pk: string;
    };
    timers: {
      createdAt: string;
      updatedAt: string;
    };
  };
}>;

export const baseTableBuilder: SingleTable = {
  tableName: 'single',
  ttlAttribute: false,
  indexes: [],
  storeMapping: {
    key: { pk: 'S' },
    timers: { createdAt: 'S', updatedAt: 'S' },
  },
};
