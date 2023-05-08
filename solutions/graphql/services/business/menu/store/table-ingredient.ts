import { TableStoreBuilder } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/table-store-builder';

export class IngredientsStoreTable implements TableStoreBuilder {
  readonly tableName = 'ingredients';
  readonly keyMapping = { pk: 'pk' };
}
