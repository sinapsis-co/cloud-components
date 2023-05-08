import { TableStoreBuilder } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/table-store-builder';

export class IngredientsStoreTable implements TableStoreBuilder {
  tableName = 'ingredients';
  keyMapping = { pk: 'pk' };
}
