import { EntityDeserialize, KeySerialize } from '@sinapsis-co/cc-sdk/handler/resolver';
import { IngredientModel } from '../model/ingredient';

export const ingredientKeySerialize: KeySerialize<IngredientModel> = (key) => {
  return {
    pk: key.id,
  };
};

export const ingredientEntityDeserialize: EntityDeserialize<IngredientModel> = (entityStore) => {
  const { pk, ...entity } = entityStore as IngredientModel['Store'];
  return entity;
};
