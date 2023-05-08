import { repository } from '@sinapsis-co/cc-sdk/integration/store/dynamo/repository';

import { IngredientModel } from '../model/ingredient';
import { IngredientsStoreTable } from '../store/table-ingredient';

export const repoIngredient = repository<IngredientModel>(IngredientsStoreTable, {
  type: 'ingredient',
  tableName: 'ingredients',
  keySerialize: (key: IngredientModel['Key']): IngredientModel['StoreBuilder']['keyMapping'] => {
    return {
      pk: key.id,
    };
  },
});
