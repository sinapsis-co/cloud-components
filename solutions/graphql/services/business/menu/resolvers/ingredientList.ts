import { ListContextRes, ScanContextReq } from '@sinapsis-co/cc-sdk/handler/resolver';
import { resolverScan } from '@sinapsis-co/cc-sdk/integration/store/dynamo/resolver-operations/scan';
import { IngredientModel } from '../model/ingredient';

export const request: ScanContextReq = (ctx) => {
  const { input } = ctx.args;
  return resolverScan(input);
};

export const response: ListContextRes<IngredientModel> = (ctx) => {
  return ctx.result;
};
