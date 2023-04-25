"use strict";
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatformFault = exports.HandledFault = exports.PlatformError = exports.HandledError = void 0;
// ERROR
class HandledError extends Error {
    constructor({ code, statusCode, detail, meta }) {
        super(detail || code);
        this.errorType = 'ERROR';
        this.statusCode = statusCode || 400;
        this.errorCode = code;
        this.meta = meta || {};
    }
    addMeta(newMeta) {
        this.meta = { ...this.meta, ...newMeta };
    }
    publish() {
        const { statusCode, errorCode, meta, errorType } = this;
        console.error({ statusCode, errorType, errorCode, errorMessage: this.message, meta });
    }
    returnException(headers) {
        this.publish();
        const { statusCode, errorCode } = this;
        return { statusCode, headers, body: JSON.stringify({ errorCode, errorMessage: this.message }) };
    }
    throwInBatchException() {
        this.publish();
        throw this;
    }
    throwException() {
        // Here we don't publish because we are throwing the exception and will be printed by Lambda
        throw this;
    }
}
exports.HandledError = HandledError;
exports.PlatformError = (HandledError);
//FAULT
class HandledFault extends Error {
    constructor({ code, statusCode, detail, meta }) {
        super(detail || code);
        this.errorType = 'FAULT';
        this.statusCode = statusCode || 500;
        this.errorCode = code;
        this.meta = meta || {};
    }
    addMeta(newMeta) {
        this.meta = { ...this.meta, ...newMeta };
    }
    publish() {
        var _a;
        const { statusCode, errorCode, errorType, meta } = this;
        console.error({
            statusCode,
            errorType,
            errorCode,
            errorMessage: this.message,
            meta,
            stack: (_a = this.stack) === null || _a === void 0 ? void 0 : _a.split('\n'),
        });
    }
    returnException(headers) {
        this.publish();
        const { statusCode, errorCode } = this;
        return { statusCode, headers, body: JSON.stringify({ errorCode, errorMessage: 'InternalServerError' }) }; // Prevents leaking internal details
    }
    throwInBatchException() {
        this.publish();
        throw this;
    }
    throwException() {
        // Here we don't publish because we are throwing the exception and will be printed by Lambda
        throw this;
    }
}
exports.HandledFault = HandledFault;
exports.PlatformFault = (HandledFault);
