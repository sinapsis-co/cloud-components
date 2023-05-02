import { IngredientModel } from '../model/ingredient';

export function ingredientKeySerialize(key: IngredientModel['Key']): IngredientModel['StoreMapping']['key'] {
  return {
    pk: key.id,
  };
}
export function ingredientBodySerialize(
  body: IngredientModel['Builder']['body']
): IngredientModel['Builder']['body'] & IngredientModel['StoreBuilder']['storeMapping']['timers'] {
  const timers: IngredientModel['StoreMapping']['timers'] = {
    createdAt: util.time.nowISO8601(),
    updatedAt: util.time.nowISO8601(),
  };
  return { ...body, ...timers };
}

//This is dirt but the only way to manage AppSync restrictions
export function ingredientEntityDeserialize(entityStore: IngredientModel['Store']): IngredientModel['Entity'] {
  const { pk, createdAt, updatedAt, ...att } = entityStore;
  return {
    ...att,
    id: pk,
    createdAt: createdAt as unknown as Date,
    updatedAt: updatedAt as unknown as Date,
  };
}
