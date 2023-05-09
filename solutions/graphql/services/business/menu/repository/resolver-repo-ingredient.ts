import { KeySerialize } from '@sinapsis-co/cc-sdk/handler/resolver';
import { IngredientModel } from '../model/ingredient';
import { IngredientsStoreTable } from '../store/table-ingredient';

export const ingredientKeySerialize: KeySerialize<IngredientsStoreTable, IngredientModel> = (key) => {
  return {
    PK: key.id,
  };
};
