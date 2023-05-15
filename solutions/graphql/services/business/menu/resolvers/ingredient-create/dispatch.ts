import { Context } from '@aws-appsync/utils';

export function request(ctx: Context) {
  return {
    operation: 'PutEvents',
    events: [
      {
        source: 'app',
        detailType: ctx.info.fieldName,
        detail: ctx.prev.result,
      },
    ],
  };
}

export function response(ctx: Context) {
  return ctx.prev.result;
}
