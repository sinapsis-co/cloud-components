import { TableStoreBuilder } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/table-store-builder';

export type IngredientsTableBuilder = TableStoreBuilder<{
  tableName: 'ingredients';
  indexes: undefined;
  keyMapping: {
    pk: string;
  };
}>;

export const ingredientsTableBuilder: IngredientsTableBuilder = {
  tableName: 'ingredients',
  indexes: undefined,
  keyMapping: {
    pk: 'S',
  },
};
