import { TableStoreBuilder } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/table-store-builder';

export type IngredientsTableBuilder = TableStoreBuilder<{
  tableName: 'ingredients';
  indexes: undefined;
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

export const ingredientsTableBuilder: IngredientsTableBuilder = {
  tableName: 'ingredients',
  indexes: undefined,
  storeMapping: {
    key: { pk: 'S' },
    timers: { createdAt: 'S', updatedAt: 'S' },
  },
};
