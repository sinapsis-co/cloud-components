import { DynamoDBTransactWriteItemsRequest, util } from '@aws-appsync/utils';
import { CreateReqContext, CreateResContext } from '@sinapsis-co/cc-sdk/handler/resolver';

import { SaleInput, SaleKey } from '../../catalog/schema/sale';
import { saleCreate } from '../../repository/resolver-repo-sale';
import { saleDetailCreate } from '../../repository/resolver-repo-sale-detail';

const table = 'appsync-_envName_-sales';

export const request: CreateReqContext<SaleInput> = (ctx) => {
  const { input } = ctx.args;

  const { venueId, details, ...body } = input;
  const saleId = util.autoId();

  // Sale
  const sale = saleCreate({ saleId, venueId }, body);

  // SaleDetails
  const serializedDetails: DynamoDBTransactWriteItemsRequest['transactItems'] = input.details.map((d) => {
    const { productId, ...body } = d;
    const { key, attributeValues } = saleDetailCreate({ venueId, saleId, productId }, body);
    return { table, operation: 'PutItem', key, attributeValues };
  });

  // For response
  ctx.stash.response = { venueId, saleId };

  return {
    operation: 'TransactWriteItems',
    transactItems: [
      { table, operation: 'PutItem', key: sale.key, attributeValues: sale.attributeValues },
      ...serializedDetails,
    ],
  };
};

export const response: CreateResContext<SaleKey> = (ctx) => {
  return ctx.stash.response;
};
