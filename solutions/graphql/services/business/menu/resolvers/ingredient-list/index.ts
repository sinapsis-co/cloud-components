import { ListReqContext, ListResContext, PaginatedInput } from '@sinapsis-co/cc-sdk/handler/resolver';
import { resolverScan } from '@sinapsis-co/cc-sdk/integration/store/dynamo/resolver-operations/scan';
import { IngredientModel } from '../../model/ingredient';

export const request: ListReqContext<PaginatedInput> = (ctx) => {
  const { input } = ctx.args;
  return resolverScan(input);
};

export const response: ListResContext<IngredientModel> = (ctx) => {
  return ctx.result;
};
