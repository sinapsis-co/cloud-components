"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracing = void 0;
const aws_xray_sdk_core_1 = require("aws-xray-sdk-core");
const uuid_1 = require("lib/uuid");
const logger_1 = require("logger");
const error_1 = require("../error");
const generateTracing = () => {
    const segment = (0, aws_xray_sdk_core_1.getSegment)();
    const subsegment = segment === null || segment === void 0 ? void 0 : segment.addNewSubsegment('Handler');
    Object.keys(process.env)
        .filter((k) => k.startsWith('CC_'))
        .map((k) => {
        subsegment.addAnnotation(k, process.env[k]);
    });
    return subsegment;
};
class Tracing {
    constructor(debugInput) {
        this.handlerId = (0, uuid_1.uuid)();
        this.subsegment = process.env.CC_TRACING ? generateTracing() : null;
        (0, logger_1.debug)({
            op: process.env.CC_FUNCTION_TYPE,
            phase: 'input',
            id: this.handlerId,
            input: JSON.stringify(debugInput),
        });
    }
    close(debugOutput) {
        if (this.subsegment)
            this.subsegment.close();
        (0, logger_1.debug)({
            op: process.env.CC_FUNCTION_TYPE,
            phase: 'output',
            id: this.handlerId,
            output: JSON.stringify(debugOutput),
        });
    }
    failureClose(e) {
        if (!this.subsegment)
            return;
        if (e instanceof error_1.PlatformError)
            this.subsegment.addErrorFlag();
        if (e instanceof error_1.PlatformFault)
            this.subsegment.addFaultFlag();
        this.subsegment.addAnnotation('errorType', e.errorType);
        this.subsegment.addAnnotation('errorCode', e.errorCode);
        this.subsegment.close();
    }
    static captureIntegration(client) {
        if (process.env.CC_TRACING)
            return (0, aws_xray_sdk_core_1.captureAWSv3Client)(client);
        return client;
    }
    static async capture(op, faultCode, target, fn, tracingMeta) {
        const id = (0, uuid_1.uuid)();
        (0, logger_1.debug)({ op, phase: 'input', id, ...tracingMeta });
        if (process.env.CC_TRACING) {
            return (0, aws_xray_sdk_core_1.captureAsyncFunc)(`${op}: ${target}`, async (innerSubsegment) => {
                if (tracingMeta) {
                    Object.keys(tracingMeta).forEach((t) => {
                        if (typeof t === 'string')
                            innerSubsegment === null || innerSubsegment === void 0 ? void 0 : innerSubsegment.addAnnotation(t, tracingMeta[t]);
                    });
                }
                const result = await fn().catch((e) => {
                    const exception = catchException(e, op, faultCode, target, tracingMeta);
                    innerSubsegment === null || innerSubsegment === void 0 ? void 0 : innerSubsegment.close(exception);
                    throw exception;
                });
                innerSubsegment === null || innerSubsegment === void 0 ? void 0 : innerSubsegment.close();
                (0, logger_1.debug)({ op, phase: 'output', id, result });
                return result;
            });
        }
        else {
            const result = await fn().catch((e) => {
                const exception = catchException(e, op, faultCode, target, tracingMeta);
                throw exception;
            });
            (0, logger_1.debug)({ op, phase: 'output', id, result });
            return result;
        }
    }
}
exports.Tracing = Tracing;
const catchException = (e, op, faultCode, target, tracingMeta) => {
    const exception = e instanceof error_1.PlatformError || e instanceof error_1.PlatformFault
        ? e
        : new error_1.PlatformFault({ code: faultCode, detail: e.message, meta: { op, target, ...tracingMeta } });
    exception.addMeta({ op, target, ...tracingMeta, ...exception.meta });
    return exception;
};
