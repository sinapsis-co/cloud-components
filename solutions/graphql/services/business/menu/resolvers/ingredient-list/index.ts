import { ListReqContext, ListResContext, PaginatedInput } from '@sinapsis-co/cc-sdk/handler/resolver';
import { IngredientModel } from '../../model/ingredient';

export const request: ListReqContext<PaginatedInput> = (ctx) => {
  const { input } = ctx.args;
  return {
    operation: 'Scan',
    ...input,
  };
};

export const response: ListResContext<IngredientModel> = (ctx) => {
  return ctx.result;
};
