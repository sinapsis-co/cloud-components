/* eslint-disable no-console */
import { SQSEvent, SQSRecord } from 'aws-lambda';
import { PlatformError, PlatformFault } from '../../error';
import { timeoutController } from '../../error/timeout';
import { HandledException } from '../../error/types';
import { deleteMessage } from '../../integrations/queue';
import { Tracing } from '../../tracing';

type Handler<Payload> = (event: SQSEvent, record: SQSRecord, payload: Payload) => Promise<void>;

/**
 * queueBatchHandler manages the batching of the queue in way that from handler perspective is processing a
 * single message. Every message in the queue is processed in parallel and the partial failures are handled automatically
 *
 * @param handler
 * @returns void
 */

export const queueBatchHandler = <Payload>(handler: Handler<Payload>): Handler<Payload> => {
  return async (event: SQSEvent): Promise<void> => {
    const [region, account, name] = event.Records[0].eventSourceARN.split(':').slice(3);
    const url = `https://sqs.${region}.amazonaws.com/${account}/${name}`;
    const batchSize = event.Records.length;
    const promises = await Promise.allSettled(
      event.Records.map(async (record) => {
        const tracing = new Tracing();
        try {
          const payload = JSON.parse(record.body);
          await timeoutController(handler(event, record, payload));
          tracing.close();
          return record.receiptHandle;
        } catch (error: any) {
          const handledException: HandledException =
            error instanceof PlatformError || error instanceof PlatformFault
              ? error
              : new PlatformFault({ code: 'FAULT_UNHANDLED', detail: error.message });
          tracing.failureClose(handledException);
          handledException.addMeta({ functionType: process.env.CC_FUNCTION_TYPE, invokeId: record.messageId });
          handledException.throwInBatchException();
        }
      })
    );
    // CASE: All messages were processed successfully
    if (!promises.find((p) => p.status === 'rejected')) {
      console.log({ namespace: 'QUEUE_BATCH_FINISHED', size: batchSize, processed: batchSize, rejected: 0 });
      return;
    }
    // CASE: All messages were rejected
    if (!promises.find((p) => p.status === 'fulfilled')) {
      console.log({ namespace: 'QUEUE_BATCH_FINISHED', size: batchSize, processed: 0, rejected: batchSize });
      throw new Error('BatchRejected'); //We plain Error used to avoid ErrorMetric duplication
    }
    // CASE: Partial success/failure
    else {
      const toDelete: PromiseFulfilledResult<string>[] = promises.filter(
        (p) => p.status === 'fulfilled'
      ) as PromiseFulfilledResult<string>[];
      console.log({
        namespace: 'QUEUE_BATCH_FINISHED',
        size: batchSize,
        processed: toDelete.length,
        rejected: batchSize - toDelete.length,
      });
      await Promise.all(toDelete.map((p: PromiseFulfilledResult<string>) => deleteMessage(p.value, url)));
      throw new Error('BatchRejected'); //We plain Error used to avoid ErrorMetric duplication
    }
  };
};
