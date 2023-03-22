import { captureAsyncFunc, getSegment, Subsegment } from 'aws-xray-sdk-core';
import { HandledError, HandledFault } from '../util/handled-exception';

const injectAnnotations = (sub: Subsegment): void => {
  Object.keys(process.env)
    .filter((k) => k.startsWith('CC_'))
    .map((k) => {
      sub.addAnnotation(k, process.env[k]!);
    });
};

const generateTracing = (): Subsegment => {
  const segment = getSegment();
  const subsegment = segment?.addNewSubsegment('Handler');
  injectAnnotations(subsegment!);
  return subsegment!;
};
export const tracedFunction = async <T>(name: string, fn: () => T): Promise<T> => {
  return captureAsyncFunc(name, async (innerSubsegment) => {
    // if (tracingMeta) Object.keys(tracingMeta).map((t) => innerSubsegment!.addAnnotation(t, tracingMeta[t]));
    const r = await fn();
    innerSubsegment?.close();
    return r;
  });
};

export class TracedHandler {
  private isEnabled: boolean;
  private subsegment: Subsegment;
  constructor() {
    this.isEnabled = !!process.env.CC_TRACING || false;
    this.subsegment = generateTracing();
  }
  // public async run<T>(fn: () => T): Promise<T> {
  //   return tracedFunction(this.name, fn);
  // }
  public close(): void {
    if (!this.isEnabled) return;
    this.subsegment.close();
  }
  public failureClose(e: any): void {
    if (!this.isEnabled) return;
    if (e instanceof HandledError) this.subsegment.addErrorFlag();
    if (e instanceof HandledFault) this.subsegment.addFaultFlag();
    this.subsegment.addAnnotation('errorType', e.errorType);
    this.subsegment.addAnnotation('errorCode', e.errorCode);
    this.subsegment.close();
  }
}
