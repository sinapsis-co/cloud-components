"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queueHandler = void 0;
const error_1 = require("error");
const tracing_1 = require("tracing");
const timeout_1 = require("util/timeout");
/**
 * queueHandler gives the full responsibility to manage the queue messages to the handler.
 * It will not delete any message from the queue if a partial failure occurs. Use it only in situations
 * where you need access to the whole batch or you queue is not batching.
 *
 * @param handler
 * @returns void
 */
const queueHandler = (handler) => {
    return async (event) => {
        const tracing = new tracing_1.Tracing(event);
        try {
            const records = event.Records.map((e) => JSON.parse(e.body));
            await (0, timeout_1.timeoutController)(handler(event, records));
            tracing.close();
        }
        catch (error) {
            const handledException = error instanceof error_1.PlatformError || error instanceof error_1.PlatformFault
                ? error
                : new error_1.PlatformFault({ code: 'FAULT_UNHANDLED', detail: error.message });
            tracing.failureClose(handledException);
            return handledException.throwException();
        }
    };
};
exports.queueHandler = queueHandler;
