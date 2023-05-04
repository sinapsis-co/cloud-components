import { TableStoreBuilder } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/table-store-builder';

export class IngredientsTableBuilder implements TableStoreBuilder {
  tableName = 'ingredients';
  keyMapping = { pk: 'pk' };
  indexes = { email: { pk: 'email' } };
}
