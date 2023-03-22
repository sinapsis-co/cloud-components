// import { performance } from 'perf_hooks';

import { wait } from '../util/executers';
import { HandledFault } from '../util/handled-exception';

export type ResponseRecordsFunc<T> = (result: T) => number;

export const timeoutController = async <T>(
  handlerPromise: Promise<T>
  // meta: PerformanceMetricMeta,
): Promise<T> => {
  const raceArr = [handlerPromise];
  raceArr.push(checkTimeout(process.env.CC_FUNCTION_TIMEOUT));
  const result = await Promise.race<T>(raceArr);
  return result;
};

const checkTimeout = async <T>(maxTime?: string): Promise<T> => {
  if (!maxTime) throw new Error('Missing maxTime');
  const time = parseInt(maxTime) * 1000 - 300;
  await wait(time);
  throw new HandledFault({ code: 'FAULT_TIMEOUT', detail: `Promise timeout after ${time}` });
};
