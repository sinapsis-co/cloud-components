import { IngredientModel } from '../model/ingredient';

export function ingredientKeySerialize(key: IngredientModel['Key']): IngredientModel['StoreBuilder']['keyMapping'] {
  return {
    pk: key.id,
  };
}

//This is dirt but the only way to manage AppSync restrictions
export function ingredientEntityDeserialize(entityStore: IngredientModel['Store']): IngredientModel['Entity'] {
  const { pk, ...att } = entityStore;
  return {
    id: pk,
    ...att,
  };
}
