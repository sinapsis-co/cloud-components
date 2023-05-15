import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';

import { ProductModel } from '../model/product';
import { ProductsStoreTable } from '../store/table-product';

export const repoProduct = repository<ProductsStoreTable, ProductModel>(ProductsStoreTable, {
  type: 'Product',
  tableName: 'products',
  keySerialize: (key: ProductModel['Key']) => {
    return {
      PK: key.venueId,
      SK: key.productId,
    };
  },
});
