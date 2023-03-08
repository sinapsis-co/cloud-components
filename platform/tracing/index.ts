import { getSegment, Subsegment } from 'aws-xray-sdk-core';

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

// type Fn = (args: any[]) => any;
// export const tracedFunction = async (sub: Subsegment, fn: Fn): void => {
//   const subsegment = sub.addNewSubsegment('Handler');
//   await fn;
// };
