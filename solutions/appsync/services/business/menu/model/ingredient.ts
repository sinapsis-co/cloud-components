import { Model } from '@sinapsis-co/cc-sdk/model';
import { IngredientsTableBuilder } from '../repository/table-ingredient';

export type IngredientModel = Model<
  {
    name: 'ingredient';
    key: {
      id: string;
    };
    body: {
      name: string;
      category: string;
      description?: string;
      price?: number;
      measurement: Measurement;
      createdAt: string;
      updatedAt: string;
    };
  },
  {
    storeBuilder: IngredientsTableBuilder;
  }
>;

export enum Measurement {
  unit,
  kg,
  g,
  l,
  ml,
}

export type Ingredient = IngredientModel['Entity'];
export type IngredientCreate = IngredientModel['Create'];
export type IngredientList = IngredientModel['List'];
