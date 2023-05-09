import { GetContextReq, GetContextRes } from '@sinapsis-co/cc-sdk/handler/resolver';
import { resolverGetItem } from '@sinapsis-co/cc-sdk/integration/store/dynamo/resolver-operations/get';
import { IngredientModel } from '../model/ingredient';
import { ingredientKeySerialize } from '../repository/resolver-repo-ingredient';

export const request: GetContextReq<IngredientModel> = (ctx) => {
  const { id } = ctx.args;
  const key = ingredientKeySerialize({ id });
  return resolverGetItem<IngredientModel>(key);
};

export const response: GetContextRes<IngredientModel> = (ctx) => {
  return ctx.result;
};
