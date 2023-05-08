import { IngredientModel } from '../model/ingredient';

export function ingredientKeySerialize(key: IngredientModel['Key']): IngredientModel['StoreBuilder']['keyMapping'] {
  return {
    pk: key.id,
  };
}

export function ingredientEntityDeserialize(entityStore: IngredientModel['Store']): IngredientModel['Entity'] {
  const { pk, ...entity } = entityStore;
  return entity;
}
