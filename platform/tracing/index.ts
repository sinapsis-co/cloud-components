import { captureAsyncFunc, getSegment, Subsegment } from 'aws-xray-sdk-core';

const injectAnnotations = (sub: Subsegment): void => {
  Object.keys(process.env)
    .filter((k) => k.startsWith('CC_'))
    .map((k) => {
      sub.addAnnotation(k, process.env[k]!);
    });
};

export const generateTracing = (): Subsegment => {
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

// type Fn = (args: any[]) => any;
// export const tracedFunction = async (sub: Subsegment, fn: Fn): void => {
//   const subsegment = sub.addNewSubsegment('Handler');
//   await fn;
// };
