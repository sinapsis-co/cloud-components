import * as _interface from '@sinapsis-co/cc-sdk/integration/database/dynamo/interface';
import { IngredientsTableBuilder } from '../table/table-ingredient';

export type IngredientEntityBuilder = _interface.EntityBuilder<{
  name: 'ingredient';
  body: {
    category: string;
    description?: string;
    measurement: Measurement;
  };
  key: {
    id: string;
  };
  timers: {
    createdAt: Date;
    updatedAt: Date;
  };
}>;

export type Ingredient = _interface.Entity<IngredientEntityBuilder>;

export type IngredientStore = _interface.EntityStore<IngredientEntityBuilder, IngredientsTableBuilder>;

export type IngredientCreate = _interface.EntityCreate<IngredientEntityBuilder>;

export type IngredientsRepoEvent = _interface.RepositoryEvent<IngredientEntityBuilder>;

export enum Measurement {
  unit,
  kg,
  g,
  l,
  ml,
}
