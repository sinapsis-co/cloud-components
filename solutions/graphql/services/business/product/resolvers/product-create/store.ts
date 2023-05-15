import { util } from '@aws-appsync/utils';
import { CreateReqContext, CreateResContext } from '@sinapsis-co/cc-sdk/handler/resolver';

import { ProductModel } from '../../model/product';
import { productCreate } from '../../repository/resolver-repo-product';

export const request: CreateReqContext<ProductModel> = (ctx) => {
  const { input } = ctx.args;
  return productCreate({ venueId: util.autoId(), productId: util.autoId() }, input);
};

export const response: CreateResContext<ProductModel> = (ctx) => {
  return ctx.result;
};
