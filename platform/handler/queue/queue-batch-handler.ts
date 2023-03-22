/* eslint-disable no-console */
import { DeleteMessageCommand } from '@aws-sdk/client-sqs';
import { SQSEvent, SQSRecord } from 'aws-lambda';
import { sqs } from '../../integrations/queue';
import { generateTracing } from '../../tracing';

type Handler<Payload> = (event: SQSEvent, record: SQSRecord, payload: Payload) => Promise<void>;

export const queueBatchHandler = <Payload>(handler: Handler<Payload>): Handler<Payload> => {
  return async (event: SQSEvent): Promise<void> => {
    const [region, account, name] = event.Records[0].eventSourceARN.split(':').slice(3);
    const url = `https://sqs.${region}.amazonaws.com/${account}/${name}`;
    let errorCounter = 0;
    const promises = await Promise.allSettled(
      event.Records.map(async (record) => {
        const tracing = generateTracing();
        try {
          const payload = JSON.parse(record.body);
          await handler(event, record, payload);
          tracing.close();
          return record.receiptHandle;
        } catch (error: any) {
          errorCounter++;
          console.log({
            messageId: record.messageId,
            retries: record.attributes.ApproximateReceiveCount,
            detail: error['raw'] || error.message,
          });
          tracing.addFaultFlag();
          tracing.close(error);
          throw error;
        }
      })
    );
    if (!promises.find((p) => p.status === 'rejected')) return;
    else {
      const toDelete: PromiseFulfilledResult<string>[] = promises.filter(
        (p) => p.status === 'fulfilled'
      ) as PromiseFulfilledResult<string>[];

      await Promise.all(toDelete.map((p: PromiseFulfilledResult<string>) => deleteMessage(p.value, url)));
    }
    const error = new Error(`${errorCounter} events rejected of ${event.Records.length}`);
    error['errorType'] = 'EventsRejected';
    throw error;
  };
};

const deleteMessage = async (receiptHandle: string, queueUrl: string): Promise<void> => {
  await sqs.send(
    new DeleteMessageCommand({
      QueueUrl: queueUrl,
      ReceiptHandle: receiptHandle,
    })
  );
};
