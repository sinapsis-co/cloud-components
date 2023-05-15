import { IndexSerializeOutput } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/config';
import { TableStoreBuilder } from '@sinapsis-co/cc-sdk/integration/store/dynamo/types/table-store-builder';

const indexes = {
  GSI_1: { PK: 'GSI_1_PK', SK: 'GSI_1_SK' },
};

export class StoreTableSale implements TableStoreBuilder {
  readonly tableName = 'sales';
  readonly keyMapping = { PK: 'PK', SK: 'SK' };
  readonly indexes = indexes;
}

export const indexMapper = <T extends TableStoreBuilder>(indexFields: IndexSerializeOutput<T>) => {
  return Object.keys(indexFields).reduce((memo, index) => {
    memo[indexes[index].PK] = indexFields[index].PK;
    memo[indexes[index].SK] = indexFields[index].SK;
    return memo;
  }, {});
};
