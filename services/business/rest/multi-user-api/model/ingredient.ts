import { Model } from '@sinapsis-co/cc-sdk/model';
import { IngredientsStoreTable } from '../store/table-ingredient';

export type IngredientModel = Model<
  {
    type: 'ingredient';
    key: {
      id: string;
    };
    body: {
      name: string;
      category: string;
      description?: string;
      price?: number;
      measurement: 'unit' | 'kg' | 'g' | 'l' | 'ml';
    };
  },
  {
    storeBuilder: IngredientsStoreTable;
  }
>;

export type Ingredient = IngredientModel['Entity'];
export type IngredientCreate = IngredientModel['Create'];
export type IngredientList = IngredientModel['List'];
