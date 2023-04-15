import { Client } from '@aws-sdk/types';
import { captureAsyncFunc, captureAWSv3Client, getSegment, Subsegment } from 'aws-xray-sdk-core';
import { PlatformError, PlatformFault } from '../error';
import { PlatformFaultCodes } from '../error/catalog';
import { HandledException } from '../error/types';
import { uuid } from '../lib/uuid';
import { debug } from '../logger';

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
  private subsegment: Subsegment | null;
  private handlerId: string;
  constructor(debugInput?: unknown) {
    this.handlerId = uuid();
    this.subsegment = process.env.CC_TRACING ? generateTracing() : null;
    debug({
      op: process.env.CC_FUNCTION_TYPE,
      phase: 'input',
      id: this.handlerId,
      input: JSON.stringify(debugInput),
    });
  }
  public close(debugOutput?: unknown): void {
    if (this.subsegment) this.subsegment.close();
    debug({
      op: process.env.CC_FUNCTION_TYPE,
      phase: 'output',
      id: this.handlerId,
      output: JSON.stringify(debugOutput),
    });
  }
  public failureClose(e: any): void {
    if (!this.subsegment) return;
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
  static async capture<PromiseReturn, TracingMeta extends Record<string, any> = Record<string, any>>(
    op: string,
    faultCode: PlatformFaultCodes,
    target: string,
    fn: () => Promise<PromiseReturn>,
    tracingMeta?: TracingMeta
  ): Promise<PromiseReturn> {
    const id = uuid();
    debug({ op, phase: 'input', id, ...tracingMeta });
    if (process.env.CC_TRACING) {
      return captureAsyncFunc<Promise<PromiseReturn>>(`${op}: ${target}`, async (innerSubsegment) => {
        if (tracingMeta)
          Object.keys(tracingMeta).forEach((t) => {
            if (typeof t === 'string') innerSubsegment?.addAnnotation(t, tracingMeta[t]);
          });
        const result = await fn().catch((e) => {
          const exception = catchException(e, op, faultCode, target, tracingMeta);
          innerSubsegment?.close(exception);
          throw exception;
        });
        innerSubsegment?.close();
        debug({ op, phase: 'output', id, result });
        return result;
      });
    } else {
      const result = fn().catch((e) => {
        const exception = catchException(e, op, faultCode, target, tracingMeta);
        throw exception;
      });
      debug({ op, phase: 'output', id, result });
      return result;
    }
  }
}

const catchException = <TracingMeta extends Record<string, string> = Record<string, string>>(
  e: any,
  op: string,
  faultCode: PlatformFaultCodes,
  target: string,
  tracingMeta?: TracingMeta
): HandledException => {
  const exception =
    e instanceof PlatformError || e instanceof PlatformFault
      ? e
      : new PlatformFault({ code: faultCode, detail: e.message, meta: { op, target, ...tracingMeta } });
  exception.addMeta({ op, target, ...tracingMeta, ...exception.meta });
  return exception;
};
