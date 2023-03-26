import { TableBuilder } from '@sinapsis-co/cc-platform/integrations/repository/table-builder';

export type OtherTableBuilder = TableBuilder<{
  tableName: 'other';
  ttlAttribute: false;
  indexes: [];
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

export const otherTableBuilder: OtherTableBuilder = {
  tableName: 'other',
  ttlAttribute: false,
  indexes: [],
  storeMapping: {
    key: { pk: 'S', sk: 'S' },
    timers: { createdAt: 'S', updatedAt: 'S' },
  },
};
