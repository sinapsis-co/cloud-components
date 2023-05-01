import { TableBuilder } from '@sinapsis-co/cc-sdk/integration/database/dynamo/types/table-builder';

export type IngredientsTableBuilder = TableBuilder<{
  tableName: 'ingredients';
  indexes: [];
  ttlAttribute: true;
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
  indexes: [],
  ttlAttribute: true,
  storeMapping: {
    key: { pk: 'S' },
    timers: { createdAt: 'S', updatedAt: 'S' },
  },
};
