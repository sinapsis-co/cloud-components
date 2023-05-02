import { Context, DynamoDBGetItemRequest, util } from '@aws-appsync/utils';

export function request(ctx: Context): DynamoDBGetItemRequest {
  const { id } = ctx.args;
  return {
    operation: 'GetItem',
    key: util.dynamodb.toMapValues({ pk: id }),
  };
}

export function response(ctx: Context) {
  const { pk, ...att } = ctx.result;
  return { id: pk, ...att };
}
