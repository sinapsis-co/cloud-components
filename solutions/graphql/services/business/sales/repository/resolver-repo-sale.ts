import { IndexSerialize, ItemCreate, KeySerialize } from '@sinapsis-co/cc-sdk/handler/resolver';
import { SaleModel } from '../model/sale';
import { StoreTableSale, indexMapper } from '../store/table-sale';

export const saleKeySerialize: KeySerialize<StoreTableSale, SaleModel> = (key) => {
  return {
    PK: `${key.venueId}#${key.saleId}`,
    SK: `#SALE#${key.saleId}`,
  };
};

export const saleIndexSerialize: IndexSerialize<StoreTableSale, SaleModel> = (entity) => {
  return {
    GSI_1: { PK: entity.venueId, SK: `${entity.createdAt}#${entity.saleId}` },
  };
};

export const saleCreate: ItemCreate<SaleModel> = (key, body) => {
  const entity: SaleModel['Entity'] = {
    type: 'Sale',
    ...key,
    ...body,
    createdAt: util.time.nowISO8601(),
    updatedAt: util.time.nowISO8601(),
  };
  const serializedIndex = saleIndexSerialize(entity);
  const mappedIndex = indexMapper<StoreTableSale>(serializedIndex);
  return {
    operation: 'PutItem',
    key: util.dynamodb.toMapValues(saleKeySerialize(key)),
    attributeValues: util.dynamodb.toMapValues({ ...entity, ...mappedIndex }),
  };
};
