import { SQSEvent } from 'aws-lambda';
type Handler<Payload> = (event: SQSEvent, records: Payload[]) => Promise<void>;
/**
 * queueHandler gives the full responsibility to manage the queue messages to the handler.
 * It will not delete any message from the queue if a partial failure occurs. Use it only in situations
 * where you need access to the whole batch or you queue is not batching.
 *
 * @param handler
 * @returns void
 */
export declare const queueHandler: <Payload>(handler: Handler<Payload>) => Handler<Payload>;
export {};
