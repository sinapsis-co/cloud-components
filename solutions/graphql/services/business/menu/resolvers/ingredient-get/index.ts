import { GetReqContext, GetResContext } from '@sinapsis-co/cc-sdk/handler/resolver';
import { resolverGetItem } from '@sinapsis-co/cc-sdk/integration/store/dynamo/resolver-operations/get';
import { IngredientModel } from '../../model/ingredient';
import { ingredientKeySerialize } from '../../repository/resolver-repo-ingredient';
import { IngredientsStoreTable } from '../../store/table-ingredient';

export const request: GetReqContext<IngredientModel> = (ctx) => {
  const { id } = ctx.args;
  const key = ingredientKeySerialize({ id });
  return resolverGetItem<IngredientsStoreTable>(key);
};

export const response: GetResContext<IngredientModel> = (ctx) => {
  return ctx.result;
};
