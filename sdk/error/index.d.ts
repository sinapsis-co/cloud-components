/// <reference types="node" />
import { PlatformErrorCodes, PlatformFaultCodes } from './catalog';
import { HandledException, HandledExceptionInput, ReturnExceptionOutput } from './types';
export declare class HandledError<CustomCodes extends string = PlatformErrorCodes> extends Error implements HandledException {
    statusCode: number;
    errorCode: CustomCodes;
    errorType: string;
    meta?: Record<string, any>;
    constructor({ code, statusCode, detail, meta }: HandledExceptionInput<CustomCodes>);
    addMeta(newMeta: Record<string, any>): void;
    private publish;
    returnException(headers?: Record<string, string>): ReturnExceptionOutput;
    throwInBatchException(): void;
    throwException(): void;
}
export declare const PlatformError: {
    new ({ code, statusCode, detail, meta }: HandledExceptionInput<PlatformErrorCodes>): HandledError<PlatformErrorCodes>;
    captureStackTrace(targetObject: object, constructorOpt?: Function | undefined): void;
    prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
    stackTraceLimit: number;
};
export declare class HandledFault<CustomCodes extends string = PlatformFaultCodes> extends Error implements HandledException {
    statusCode: number;
    errorCode: CustomCodes;
    errorType: string;
    meta?: Record<string, any>;
    constructor({ code, statusCode, detail, meta }: HandledExceptionInput<CustomCodes>);
    addMeta(newMeta: Record<string, any>): void;
    private publish;
    returnException(headers?: Record<string, string>): ReturnExceptionOutput;
    throwInBatchException(): void;
    throwException(): void;
}
export declare const PlatformFault: {
    new ({ code, statusCode, detail, meta }: HandledExceptionInput<PlatformFaultCodes>): HandledFault<PlatformFaultCodes>;
    captureStackTrace(targetObject: object, constructorOpt?: Function | undefined): void;
    prepareStackTrace?: ((err: Error, stackTraces: NodeJS.CallSite[]) => any) | undefined;
    stackTraceLimit: number;
};
