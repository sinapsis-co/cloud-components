import { Client } from '@aws-sdk/types';
import { PlatformFaultCodes } from 'error/catalog';
export declare class Tracing {
    private subsegment;
    private handlerId;
    constructor(debugInput?: unknown);
    close(debugOutput?: unknown): void;
    failureClose(e: any): void;
    static captureIntegration<T extends Client<any, any, any>>(client: T): T;
    static capture<PromiseReturn, TracingMeta extends Record<string, any> = Record<string, any>>(op: string, faultCode: PlatformFaultCodes, target: string, fn: () => Promise<PromiseReturn>, tracingMeta?: TracingMeta): Promise<PromiseReturn>;
}
