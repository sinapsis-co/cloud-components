import { Model } from '@sinapsis-co/cc-sdk/model';

export type IngredientModel = Model<{
  type: 'Ingredient';
  key: {
    id: string;
  };
  body: {
    name: string;
    category: string;
    description?: string;
    price?: number;
    measurement: Measurement;
  };
}>;

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
