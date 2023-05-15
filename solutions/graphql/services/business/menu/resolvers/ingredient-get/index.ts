import { GetReqContext, GetResContext } from '@sinapsis-co/cc-sdk/handler/resolver';
import { IngredientModel } from '../../model/ingredient';
import { ingredientKeySerialize } from '../../repository/resolver-repo-ingredient';

export const request: GetReqContext<IngredientModel> = (ctx) => {
  const { id } = ctx.args;
  return {
    operation: 'GetItem',
    key: util.dynamodb.toMapValues(ingredientKeySerialize({ id })),
  };
};

export const response: GetResContext<IngredientModel> = (ctx) => {
  return ctx.result;
};
