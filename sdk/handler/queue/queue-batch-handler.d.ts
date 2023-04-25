import { SQSBatchResponse, SQSEvent, SQSRecord } from 'aws-lambda';
type Handler<Payload> = (event: SQSEvent, record: SQSRecord, payload: Payload) => Promise<void>;
/**
 * queueBatchHandler manages the batching of the queue in way that from handler perspective is processing a
 * single message. Every message in the queue is processed in parallel and the partial failures are handled automatically
 *
 * @param handler
 * @returns void
 */
export declare const queueBatchHandler: <Payload>(handler: Handler<Payload>) => (event: SQSEvent) => Promise<SQSBatchResponse>;
export {};
