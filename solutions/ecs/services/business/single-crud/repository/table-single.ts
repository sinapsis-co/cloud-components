import { TableStoreBuilder } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/table-store-builder';

export type SingleTableStore = TableStoreBuilder<{
  tableName: 'single';
  indexes: undefined;
  keyMapping: {
    pk: string;
  };
}>;

export const baseTableBuilder: SingleTableStore = {
  tableName: 'single',
  indexes: undefined,
  keyMapping: {
    pk: 'S',
  },
};
