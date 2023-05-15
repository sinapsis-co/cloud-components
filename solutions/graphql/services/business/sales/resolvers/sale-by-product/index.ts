import { ListReqContext, ListResContext } from '@sinapsis-co/cc-sdk/handler/resolver';
import { SaleListByProductInput } from '../../catalog/schema/sale';
import { SaleDetailModel } from '../../model/sale-detail';
import { saleDetailIndexSerialize } from '../../repository/resolver-repo-sale-detail';

export const request: ListReqContext<SaleListByProductInput> = (ctx) => {
  const {
    input: { limit, nextToken, productId, venueId },
  } = ctx.args;

  const key = saleDetailIndexSerialize({ venueId, productId } as SaleDetailModel['Entity']);

  return {
    operation: 'Query',
    index: 'GSI_1',
    query: { expression: 'GSI_1_PK = :PK', expressionValues: util.dynamodb.toMapValues({ ':PK': key.GSI_1.PK }) },
    scanIndexForward: false,
    limit,
    nextToken,
  };
};

export const response: ListResContext<SaleDetailModel> = (ctx) => {
  return ctx.result;
};
