/* eslint-disable no-console */
import { queueBatchHandler } from '@sinapsis-co/cc-platform-v2/handler/queue/queue-batch-handler';
import { ssrLandingMessage } from '../../catalog';
import { nextServerlessRender } from '../../platform/next-serverless';

export const handler = queueBatchHandler<ssrLandingMessage.renderGenerator.Message>(
  async (_event, _record, payload) => {
    await nextServerlessRender(payload.uri, payload.querystring);
  }
);
