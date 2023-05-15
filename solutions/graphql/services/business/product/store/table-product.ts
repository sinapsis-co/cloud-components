import { TableStoreBuilder } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/table-store-builder';

export class ProductsStoreTable implements TableStoreBuilder {
  readonly tableName = 'products';
  readonly keyMapping = { PK: 'PK', SK: 'SK' };
}
