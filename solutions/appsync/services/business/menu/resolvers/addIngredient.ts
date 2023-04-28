import { Context, DynamoDBGetItemRequest, util } from '@aws-appsync/utils';

export function request(ctx: Context): DynamoDBGetItemRequest {
  const {
    args: { id },
  } = ctx;
  return {
    operation: 'GetItem',
    key: util.dynamodb.toMapValues({ id }),
  };
}

export function response(ctx: Context) {
  return ctx.result;
}
