import { GetReqContext, GetResContext } from '@sinapsis-co/cc-sdk/handler/resolver';
import { ProductModel } from '../../model/product';
import { productKeySerialize } from '../../repository/resolver-repo-product';

export const request: GetReqContext<ProductModel> = (ctx) => {
  const { productId: id } = ctx.args;
  return {
    operation: 'GetItem',
    key: util.dynamodb.toMapValues(productKeySerialize({ venueId: id, productId: id })),
  };
};

export const response: GetResContext<ProductModel> = (ctx) => {
  return ctx.result;
};
