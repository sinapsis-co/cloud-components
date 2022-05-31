/* eslint-disable no-console */
import { SQSEvent, SQSRecord } from 'aws-lambda';
import { deleteMessage } from '../../integrations/queue/delete-message';

type Handler<Payload> = (event: SQSEvent, record: SQSRecord, payload: Payload) => Promise<void>;

export const queueBatchHandler = <Payload>(handler: Handler<Payload>): Handler<Payload> => {
  return async (event: SQSEvent): Promise<void> => {
    const [region, account, name] = event.Records[0].eventSourceARN.split(':').slice(3);
    const url = `https://sqs.${region}.amazonaws.com/${account}/${name}`;
    let errorCounter = 0;
    const promises = await Promise.allSettled(
      event.Records.map(async (r) => {
        try {
          await handler(event, r, JSON.parse(r.body));
          await deleteMessage(r.receiptHandle, url);
        } catch (error: any) {
          errorCounter++;
          console.log({
            messageId: r.messageId,
            retries: r.attributes.ApproximateReceiveCount,
            detail: error['raw'] || error.message,
          });
          throw error;
        }
      })
    );
    if (!promises.find((p) => p.status === 'rejected')) return;
    const error = new Error(`${errorCounter} events rejected of ${event.Records.length}`);
    error['errorType'] = 'EventsRejected';
    throw error;
  };
};
