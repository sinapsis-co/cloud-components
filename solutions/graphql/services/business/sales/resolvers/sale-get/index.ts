import { ListReqContext, ListResContext } from '@sinapsis-co/cc-sdk/handler/resolver';
import { SaleKeyInput, SaleQueryResult } from '../../catalog/schema/sale';
import { saleKeySerialize } from '../../repository/resolver-repo-sale';

export const request: ListReqContext<SaleKeyInput> = (ctx) => {
  const {
    input: { venueId, saleId },
  } = ctx.args;
  const limit = ctx.info.selectionSetList.some((x) => x === 'details') ? 20 : 1;
  const key = saleKeySerialize({ venueId, saleId });
  return {
    operation: 'Query',
    query: {
      expression: 'PK = :PK',
      expressionValues: util.dynamodb.toMapValues({ ':PK': key.PK }),
    },
    limit,
  };
};

export const response: ListResContext<SaleQueryResult> = (ctx) => {
  const [sale, ...details] = ctx.result.items;
  return {
    ...sale,
    details,
  };
};
