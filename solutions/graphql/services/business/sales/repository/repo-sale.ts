import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';

import { SaleModel } from '../model/sale';
import { StoreTableSale } from '../store/table-sale';

export const repoSale = repository<StoreTableSale, SaleModel>(StoreTableSale, {
  type: 'Sale',
  tableName: 'sales',
  keySerialize: (key: SaleModel['Key']) => {
    return {
      PK: `${key.venueId}`,
      SK: `#${key.saleId}#SALE#${key.saleId}`,
    };
  },
  indexSerialize: (entity) => {
    return {
      GSI_1: { PK: undefined, SK: undefined },
    };
  },
});
