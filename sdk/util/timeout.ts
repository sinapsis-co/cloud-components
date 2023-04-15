// import { performance } from 'perf_hooks';

import { PlatformFault } from '../error';
import { wait } from './executers';

export type ResponseRecordsFunc<T> = (result: T) => number;

export const timeoutController = async <T>(handlerPromise: Promise<T>): Promise<T> => {
  const result = await Promise.race<T>([handlerPromise, checkTimeout(process.env.CC_FUNCTION_TIMEOUT)]);
  return result;
};

const checkTimeout = async <T>(maxTime?: string): Promise<T> => {
  if (!maxTime) throw new PlatformFault({ code: 'FAULT_TIMEOUT', detail: 'Missing maxTime' });
  const time = parseInt(maxTime) * 1000 - 500;
  await wait(time);
  throw new PlatformFault({ code: 'FAULT_TIMEOUT', detail: `Promise timeout after ${time}` });
};
