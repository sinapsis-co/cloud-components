import { IndexSerialize, ItemCreate, KeySerialize } from '@sinapsis-co/cc-sdk/handler/resolver';
import { SaleDetailModel } from '../model/sale-detail';
import { StoreTableSale, indexMapper } from '../store/table-sale';

export const saleDetailKeySerialize: KeySerialize<StoreTableSale, SaleDetailModel> = (key) => {
  return {
    PK: `${key.venueId}#${key.saleId}`,
    SK: `${key.saleId}#SALE_DETAIL#${key.productId}`,
  };
};

export const saleDetailIndexSerialize: IndexSerialize<StoreTableSale, SaleDetailModel> = (entity) => {
  return {
    GSI_1: { PK: `${entity.venueId}#${entity.productId}`, SK: `${entity.createdAt}#${entity.saleId}` },
  };
};

export const saleDetailCreate: ItemCreate<SaleDetailModel> = (key, body) => {
  const entity: SaleDetailModel['Entity'] = {
    type: 'SaleDetail',
    ...key,
    ...body,
    createdAt: util.time.nowISO8601(),
    updatedAt: util.time.nowISO8601(),
  };
  const serializedIndex = saleDetailIndexSerialize(entity);
  const mappedIndex = indexMapper<StoreTableSale>(serializedIndex);
  return {
    operation: 'PutItem',
    key: util.dynamodb.toMapValues(saleDetailKeySerialize(key)),
    attributeValues: util.dynamodb.toMapValues({ ...entity, ...mappedIndex }),
  };
};
