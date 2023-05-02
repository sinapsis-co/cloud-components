import { GetContextReq, GetContextRes } from '@sinapsis-co/cc-sdk/handler/resolver';
import { resolverGetItem } from '@sinapsis-co/cc-sdk/integration/store/dynamo/resolver-operations/get';
import { IngredientModel } from '../model/ingredient';
import { ingredientEntityDeserialize, ingredientKeySerialize } from '../repository/resolver-repo-ingredient';

export const request: GetContextReq<IngredientModel['Builder']> = (ctx) => {
  const { id } = ctx.args;
  const key = ingredientKeySerialize({ id });
  return resolverGetItem<IngredientModel['StoreBuilder']>(key);
};

export const response: GetContextRes<IngredientModel['Builder'], IngredientModel['StoreBuilder']> = (ctx) => {
  return ingredientEntityDeserialize(ctx.result);
};
