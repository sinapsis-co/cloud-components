import { ListReqContext, ListResContext, PaginatedInput } from '@sinapsis-co/cc-sdk/handler/resolver';
import { ProductModel } from '../../model/product';

export const request: ListReqContext<PaginatedInput> = (ctx) => {
  const { input } = ctx.args;
  return {
    operation: 'Scan',
    ...input,
  };
};

export const response: ListResContext<ProductModel> = (ctx) => {
  return ctx.result;
};
