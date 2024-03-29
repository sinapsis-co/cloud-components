import { PlatformFault } from '../error';

export const wait = (delay: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, delay));
};

export const retrievableFunc = async <T>(
  retryNumber: number,
  maxRetry: number,
  timeGap: number,
  fn: (...args: any[]) => Promise<T>,
  ...args: any[]
): Promise<T> => {
  const result: T = await fn(...args).catch(async (e) => {
    if (retryNumber < maxRetry || maxRetry == 0) {
      if (timeGap > 0) await wait(timeGap);
      return retrievableFunc(++retryNumber, maxRetry, timeGap, fn, ...args);
    } else throw new PlatformFault({ code: 'FAULT_MAX_RETRY_REACHED', detail: e.message });
  });
  return result;
};
