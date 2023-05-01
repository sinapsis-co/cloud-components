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
      measurement: Measurement;
    };
    timers: {
      createdAt: Date;
      updatedAt: Date;
    };
  },
  IngredientsTableBuilder,
  'category'
>;

export type Ingredient = IngredientModel['Entity'];
export type IngredientCreate = IngredientModel['Create'];

export enum Measurement {
  unit,
  kg,
  g,
  l,
  ml,
}
