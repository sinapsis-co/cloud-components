"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queueBatchHandler = void 0;
const error_1 = require("error");
const logger_1 = require("logger");
const tracing_1 = require("tracing");
const timeout_1 = require("util/timeout");
/**
 * queueBatchHandler manages the batching of the queue in way that from handler perspective is processing a
 * single message. Every message in the queue is processed in parallel and the partial failures are handled automatically
 *
 * @param handler
 * @returns void
 */
const queueBatchHandler = (handler) => {
    return async (event) => {
        const batchSize = event.Records.length;
        const promises = await Promise.allSettled(event.Records.map(async (record) => {
            const tracing = new tracing_1.Tracing(record);
            try {
                const payload = JSON.parse(record.body);
                await (0, timeout_1.timeoutController)(handler(event, record, payload));
                tracing.close();
                return record.messageId;
            }
            catch (error) {
                const handledException = error instanceof error_1.PlatformError || error instanceof error_1.PlatformFault
                    ? error
                    : new error_1.PlatformFault({ code: 'FAULT_UNHANDLED', detail: error.message });
                tracing.failureClose(handledException);
                handledException.addMeta({ functionType: process.env.CC_FUNCTION_TYPE, invokeId: record.messageId });
                handledException.throwInBatchException();
            }
        }));
        // CASE: All messages were processed successfully
        if (!promises.find((p) => p.status === 'rejected')) {
            (0, logger_1.info)({ namespace: 'QUEUE_BATCH_FINISHED', size: batchSize, processed: batchSize, rejected: 0 });
            return { batchItemFailures: [] };
        }
        // CASE: All messages were rejected
        if (!promises.find((p) => p.status === 'fulfilled')) {
            (0, logger_1.info)({ namespace: 'QUEUE_BATCH_FINISHED', size: batchSize, processed: 0, rejected: batchSize });
            throw new Error('BatchRejected'); //We plain Error used to avoid ErrorMetric duplication
        }
        // CASE: Partial success/failure
        else {
            const toDelete = promises.filter((p) => p.status === 'fulfilled');
            (0, logger_1.info)({
                namespace: 'QUEUE_BATCH_FINISHED',
                size: batchSize,
                processed: toDelete.length,
                rejected: batchSize - toDelete.length,
            });
            return { batchItemFailures: toDelete.map((p) => ({ itemIdentifier: p.value })) };
        }
    };
};
exports.queueBatchHandler = queueBatchHandler;
