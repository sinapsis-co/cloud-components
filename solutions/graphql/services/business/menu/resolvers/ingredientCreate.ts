import { util } from '@aws-appsync/utils';
import { CreateContextReq, CreateContextRes } from '@sinapsis-co/cc-sdk/handler/resolver';
import { resolverCreateItem } from '@sinapsis-co/cc-sdk/integration/store/dynamo/resolver-operations/create';

import { IngredientModel } from '../model/ingredient';
import { ingredientEntityDeserialize, ingredientKeySerialize } from '../repository/resolver-repo-ingredient';

export const request: CreateContextReq<IngredientModel> = (ctx) => {
  const { input } = ctx.args;
  const type: IngredientModel['Type'] = 'ingredient';
  const key = ingredientKeySerialize({ id: util.autoId() });
  return resolverCreateItem<IngredientModel>(type, key, input);
};

export const response: CreateContextRes<IngredientModel> = (ctx) => {
  return ingredientEntityDeserialize(ctx.result);
};
