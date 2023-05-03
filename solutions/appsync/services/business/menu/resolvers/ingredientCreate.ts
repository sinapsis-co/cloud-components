import { util } from '@aws-appsync/utils';
import { CreateContextReq, CreateContextRes } from '@sinapsis-co/cc-sdk/handler/resolver';
import { resolverCreateItem } from '@sinapsis-co/cc-sdk/integration/store/dynamo/resolver-operations/create';
import { IngredientModel } from '../model/ingredient';
import { ingredientEntityDeserialize, ingredientKeySerialize } from '../repository/resolver-repo-ingredient';

export const request: CreateContextReq<IngredientModel['Builder']> = (ctx) => {
  const { input } = ctx.args;
  const key = ingredientKeySerialize({ id: util.autoId() });
  return resolverCreateItem<IngredientModel['Builder'], IngredientModel['StoreBuilder']>(key, input);
};

export const response: CreateContextRes<IngredientModel['Builder'], IngredientModel['StoreBuilder']> = (ctx) => {
  return ingredientEntityDeserialize(ctx.result);
};
