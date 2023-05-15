import { util } from '@aws-appsync/utils';
import { CreateReqContext, CreateResContext } from '@sinapsis-co/cc-sdk/handler/resolver';

import { IngredientModel } from '../../model/ingredient';
import { ingredientCreate } from '../../repository/resolver-repo-ingredient';

export const request: CreateReqContext<IngredientModel> = (ctx) => {
  const { input } = ctx.args;
  return ingredientCreate({ id: util.autoId() }, input);
};

export const response: CreateResContext<IngredientModel> = (ctx) => {
  return ctx.result;
};
