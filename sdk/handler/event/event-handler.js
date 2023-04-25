"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventHandler = void 0;
const error_1 = require("error");
const tracing_1 = require("tracing");
const timeout_1 = require("util/timeout");
const eventHandler = (handler) => {
    return async (event) => {
        const tracing = new tracing_1.Tracing(event);
        try {
            await (0, timeout_1.timeoutController)(handler(event));
            tracing.close();
        }
        catch (error) {
            const handledException = error instanceof error_1.PlatformError || error instanceof error_1.PlatformFault
                ? error
                : new error_1.PlatformFault({ code: 'FAULT_UNHANDLED', detail: error.message });
            handledException.addMeta({ functionType: process.env.CC_FUNCTION_TYPE, invokeId: event.id });
            tracing.failureClose(handledException);
            return handledException.throwException();
        }
    };
};
exports.eventHandler = eventHandler;
