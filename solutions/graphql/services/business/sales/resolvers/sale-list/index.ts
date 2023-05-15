import { ListReqContext, ListResContext } from '@sinapsis-co/cc-sdk/handler/resolver';
import { SaleListInput } from '../../catalog/schema/sale';
import { SaleModel } from '../../model/sale';

export const request: ListReqContext<SaleListInput> = (ctx) => {
  const {
    input: { limit, nextToken, venueId },
  } = ctx.args;

  return {
    operation: 'Query',
    index: 'GSI_1',
    query: { expression: 'GSI_1_PK = :PK', expressionValues: util.dynamodb.toMapValues({ ':PK': venueId }) },
    scanIndexForward: false,
    limit,
    nextToken,
  };
};

export const response: ListResContext<SaleModel> = (ctx) => {
  return ctx.result;
};
