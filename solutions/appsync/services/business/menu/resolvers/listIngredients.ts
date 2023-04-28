import { Context, DynamoDBScanRequest } from '@aws-appsync/utils';

export function request(ctx: Context): DynamoDBScanRequest {
  const { limit = 20, nextToken } = ctx.args;
  return { operation: 'Scan', limit, nextToken };
}

export function response(ctx: Context) {
  return {
    items: ctx.result.items.map((item) => {
      const { pk, ...att } = item;
      return { id: pk, ...att };
    }),
  };
}
