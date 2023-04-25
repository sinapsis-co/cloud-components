"use strict";
// import { performance } from 'perf_hooks';
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeoutController = void 0;
const error_1 = require("error");
const executers_1 = require("./executers");
const timeoutController = async (handlerPromise) => {
    const result = await Promise.race([handlerPromise, checkTimeout(process.env.CC_FUNCTION_TIMEOUT)]);
    return result;
};
exports.timeoutController = timeoutController;
const checkTimeout = async (maxTime) => {
    if (!maxTime)
        throw new error_1.PlatformFault({ code: 'FAULT_TIMEOUT', detail: 'Missing maxTime' });
    const time = parseInt(maxTime) * 1000 - 500;
    await (0, executers_1.wait)(time);
    throw new error_1.PlatformFault({ code: 'FAULT_TIMEOUT', detail: `Promise timeout after ${time}` });
};
