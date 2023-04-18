import { TableBuilder } from '@sinapsis-co/cc-sdk/integration/repository/table-builder';

export type BaseTableBuilder = TableBuilder<{
  tableName: 'base';
  indexes: [];
  ttlAttribute: false;
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

export const baseTableBuilder: BaseTableBuilder = {
  tableName: 'base',
  ttlAttribute: false,
  indexes: [],
  storeMapping: {
    key: { pk: 'S', sk: 'S' },
    timers: { createdAt: 'S', updatedAt: 'S' },
  },
};
