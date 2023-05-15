import { ItemCreate, KeySerialize } from '@sinapsis-co/cc-sdk/handler/resolver';
import { ProductModel } from '../model/product';
import { ProductsStoreTable } from '../store/table-product';

export const productKeySerialize: KeySerialize<ProductsStoreTable, ProductModel> = (key) => {
  return {
    PK: key.venueId,
    SK: key.productId,
  };
};

export const productCreate: ItemCreate<ProductModel> = (key, body) => {
  const entity: ProductModel['Entity'] = {
    type: 'Product',
    ...key,
    ...body,
    createdAt: util.time.nowISO8601(),
    updatedAt: util.time.nowISO8601(),
  };
  return {
    operation: 'PutItem',
    key: util.dynamodb.toMapValues(productKeySerialize(key)),
    attributeValues: util.dynamodb.toMapValues(entity),
  };
};
