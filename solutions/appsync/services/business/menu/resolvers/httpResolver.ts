import { Context } from '@aws-appsync/utils';

export function request(ctx: Context) {
  return {
    method: 'POST',
    resourcePath: '/appsync-dev-global-event-bus',
    params: {
      headers: { 'Content-Type': 'application/x-amz-json-1.1', 'X-Amz-Target': 'AWSEvents.PutEvents' },
      body: {
        Entries: [
          {
            source: 'app',
            detailType: 'test',
            eventBusName: 'appsync-dev-global-event-bus',
            detail: JSON.stringify(ctx.prev.result),
          },
        ],
      },
    },
  };
}

export function response(ctx: Context) {
  return ctx.prev.result;
}
