import { ItemCreate, KeySerialize } from '@sinapsis-co/cc-sdk/handler/resolver';
import { IngredientModel } from '../model/ingredient';
import { IngredientsStoreTable } from '../store/table-ingredient';

export const ingredientKeySerialize: KeySerialize<IngredientsStoreTable, IngredientModel> = (key) => {
  return {
    PK: key.id,
  };
};

export const ingredientCreate: ItemCreate<IngredientModel> = (key, body) => {
  const entity: IngredientModel['Entity'] = {
    type: 'Ingredient',
    ...key,
    ...body,
    createdAt: util.time.nowISO8601(),
    updatedAt: util.time.nowISO8601(),
  };
  return {
    operation: 'PutItem',
    key: util.dynamodb.toMapValues(ingredientKeySerialize(key)),
    attributeValues: util.dynamodb.toMapValues(entity),
  };
};
