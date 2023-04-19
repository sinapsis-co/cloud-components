import { SQSEvent } from 'aws-lambda';
import { PlatformError, PlatformFault } from 'error';
import { HandledException } from 'error/types';
import { Tracing } from 'tracing';
import { timeoutController } from 'util/timeout';

type Handler<Payload> = (event: SQSEvent, records: Payload[]) => Promise<void>;

/**
 * queueHandler gives the full responsibility to manage the queue messages to the handler.
 * It will not delete any message from the queue if a partial failure occurs. Use it only in situations
 * where you need access to the whole batch or you queue is not batching.
 *
 * @param handler
 * @returns void
 */

export const queueHandler = <Payload>(handler: Handler<Payload>): Handler<Payload> => {
  return async (event: SQSEvent): Promise<void> => {
    const tracing = new Tracing(event);
    try {
      const records: Payload[] = event.Records.map((e) => JSON.parse(e.body));
      await timeoutController(handler(event, records));
      tracing.close();
    } catch (error: any) {
      const handledException: HandledException =
        error instanceof PlatformError || error instanceof PlatformFault
          ? error
          : new PlatformFault({ code: 'FAULT_UNHANDLED', detail: error.message });
      tracing.failureClose(handledException);
      return handledException.throwException();
    }
  };
};
