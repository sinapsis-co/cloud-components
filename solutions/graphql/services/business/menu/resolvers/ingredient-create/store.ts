import { util } from '@aws-appsync/utils';
import { CreateReqContext, CreateResContext } from '@sinapsis-co/cc-sdk/handler/resolver';
import { resolverCreateItem } from '@sinapsis-co/cc-sdk/integration/store/dynamo/resolver-operations/create';

import { IngredientModel } from '../../model/ingredient';
import { ingredientKeySerialize } from '../../repository/resolver-repo-ingredient';
import { IngredientsStoreTable } from '../../store/table-ingredient';

export const request: CreateReqContext<IngredientModel> = (ctx) => {
  const { input } = ctx.args;
  const type: IngredientModel['Type'] = 'Ingredient';
  const key = { id: util.autoId() };
  const serializedKey = ingredientKeySerialize(key);
  return resolverCreateItem<IngredientsStoreTable, IngredientModel>(type, key, serializedKey, input);
};

export const response: CreateResContext<IngredientModel> = (ctx) => {
  return ctx.result;
};
