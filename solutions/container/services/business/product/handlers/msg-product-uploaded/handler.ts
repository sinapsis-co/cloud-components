import { queueBatchHandler } from '@sinapsis-co/cc-sdk/handler/queue/queue-batch-handler';
import { productMessage } from '../../catalog';

export const handler = queueBatchHandler<productMessage.productUploaded.Message>(async (event, record, payload) => {
  console.log(payload.detail);
  return;
});
