import { ListContextRes, ScanContextReq } from '@sinapsis-co/cc-sdk/handler/resolver';
import { resolverScan } from '@sinapsis-co/cc-sdk/integration/store/dynamo/resolver-operations/scan';
import { IngredientModel } from '../model/ingredient';
import { ingredientEntityDeserialize } from '../repository/resolver-repo-ingredient';

export const request: ScanContextReq = (ctx) => {
  const {
    input: { limit, nextToken },
  } = ctx.args;
  return resolverScan(limit, nextToken);
};

export const response: ListContextRes<IngredientModel> = (ctx) => {
  return {
    items: ctx.result.items.map((item) => ingredientEntityDeserialize(item)),
    nextToken: ctx.result.nextToken,
  };
};
