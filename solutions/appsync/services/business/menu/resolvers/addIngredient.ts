import { Context, DynamoDBPutItemRequest, util } from '@aws-appsync/utils';

export function request(ctx: Context): DynamoDBPutItemRequest {
  const { input } = ctx.args;
  return {
    operation: 'PutItem',
    key: util.dynamodb.toMapValues({ pk: util.autoId() }),
    attributeValues: util.dynamodb.toMapValues(input)!,
  };
}

export function response(ctx: Context) {
  const { pk, ...att } = ctx.result;
  return { id: pk, ...att };
}
