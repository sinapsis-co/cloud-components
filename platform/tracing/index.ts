import { Client } from '@aws-sdk/types';
import { captureAsyncFunc, captureAWSv3Client, getSegment, Subsegment } from 'aws-xray-sdk-core';
import { PlatformError, PlatformFault } from '../error';
import { PlatformFaultCodes } from '../error/catalog';

const generateTracing = (): Subsegment => {
  const segment = getSegment();
  const subsegment = segment?.addNewSubsegment('Handler');
  Object.keys(process.env)
    .filter((k) => k.startsWith('CC_'))
    .map((k) => {
      subsegment!.addAnnotation(k, process.env[k]!);
    });
  return subsegment!;
};

export class Tracing {
  private isEnabled: boolean;
  private subsegment: Subsegment;
  constructor() {
    this.isEnabled = !!process.env.CC_TRACING || false;
    this.subsegment = generateTracing();
  }
  public close(): void {
    if (!this.isEnabled) return;
    this.subsegment.close();
  }
  public failureClose(e: any): void {
    if (!this.isEnabled) return;
    if (e instanceof PlatformError) this.subsegment.addErrorFlag();
    if (e instanceof PlatformFault) this.subsegment.addFaultFlag();
    this.subsegment.addAnnotation('errorType', e.errorType);
    this.subsegment.addAnnotation('errorCode', e.errorCode);
    this.subsegment.close();
  }
  static captureIntegration<T extends Client<any, any, any>>(client: T): T {
    if (process.env.CC_TRACING) return captureAWSv3Client(client);
    return client;
  }
  static async traceableOp<T, TracingMeta extends Record<string, string> = Record<string, string>>(
    op: string,
    faultCode: PlatformFaultCodes,
    target: string,
    fn: () => Promise<T>,
    tracingMeta?: TracingMeta
  ): Promise<T> {
    if (process.env.CC_TRACING) {
      return captureAsyncFunc<Promise<T>>(`${op}: ${target}`, async (innerSubsegment) => {
        if (tracingMeta) Object.keys(tracingMeta).map((t) => innerSubsegment!.addAnnotation(t, tracingMeta[t]));
        const result = await fn().catch((e) => {
          const exception =
            e instanceof PlatformError || e instanceof PlatformFault
              ? e
              : new PlatformFault({ code: faultCode, detail: e.message, meta: { op, target, ...tracingMeta } });
          exception.addMeta({ op, target, ...tracingMeta });
          innerSubsegment?.close(exception);
          throw exception;
        });
        innerSubsegment?.close();
        return result;
      });
    } else {
      return fn().catch((e) => {
        const exception =
          e instanceof PlatformError || e instanceof PlatformFault
            ? e
            : new PlatformFault({ code: faultCode, detail: e.message, meta: { op, target, ...tracingMeta } });
        exception.addMeta({ op, target, ...tracingMeta, ...exception.meta });
        throw exception;
      });
    }
  }
}
