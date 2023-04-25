"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrievableFunc = exports.wait = void 0;
const error_1 = require("../error");
const wait = (delay) => {
    return new Promise((resolve) => setTimeout(resolve, delay));
};
exports.wait = wait;
const retrievableFunc = async (retryNumber, maxRetry, timeGap, fn, ...args) => {
    const result = await fn(...args).catch(async (e) => {
        if (retryNumber < maxRetry || maxRetry == 0) {
            if (timeGap > 0)
                await (0, exports.wait)(timeGap);
            return (0, exports.retrievableFunc)(++retryNumber, maxRetry, timeGap, fn, ...args);
        }
        else
            throw new error_1.PlatformFault({ code: 'FAULT_MAX_RETRY_REACHED', detail: e.message });
    });
    return result;
};
exports.retrievableFunc = retrievableFunc;
