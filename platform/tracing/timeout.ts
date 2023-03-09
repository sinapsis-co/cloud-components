// import { performance } from 'perf_hooks';

import { ApiError } from '../handler/api/api-error';
import { wait } from '../util/executers';

export type ResponseRecordsFunc<T> = (result: T) => number;

export const timeoutController = async <T>(
  handlerPromise: Promise<T>
  // meta: PerformanceMetricMeta,
  // responseRecordsFunc: ResponseRecordsFunc<T>
): Promise<T> => {
  // const { traceId, name, tenantId, sellerId, marketplaceId, asin, sku, requestRecordsNumber, pipeOrder, point } = meta;
  // const perfMetric: Partial<PerformanceMetric> = {
  //   traceId,
  //   name,
  //   tenantId,
  //   sellerId,
  //   marketplaceId,
  //   asin,
  //   sku,
  //   requestRecordsNumber,
  //   pipeOrder,
  //   point,
  // };
  // const start = performance.now();
  try {
    const raceArr = [handlerPromise];
    raceArr.push(checkTimeout(process.env.CC_FUNCTION_TIMEOUT));
    const result = await Promise.race<T>(raceArr);
    // perfMetric.date = new Date().toISOString();
    // perfMetric.duration = Math.trunc(performance.now() - start);
    // perfMetric.responseRecordsNumber = responseRecordsFunc(result);
    // perfMetric.isProcessed = true;
    // await sendMessages([perfMetric], process.env.METRIC_QUEUE!);
    return result;
  } catch (error: any) {
    // perfMetric.date = new Date().toISOString();
    // perfMetric.duration = Math.trunc(performance.now() - start);
    // perfMetric.responseRecordsNumber = 0;
    // perfMetric.isProcessed = false;
    // await sendMessages([perfMetric], process.env.METRIC_QUEUE!);

    // const meta = { reason: error.message, traceId, tenantId, sellerId, marketplaceId, asin };
    // if (error instanceof ApiError) {
    //   // error.raw['meta'] = meta;
    //   throw error;
    // }
    throw new ApiError(error.message, 500, 'timeout');
  }
};

const checkTimeout = async <T>(maxTime?: string): Promise<T> => {
  if (!maxTime) throw new Error('Missing maxTime');
  const time = parseInt(maxTime) * 1000 - 300;
  await wait(time);
  throw new Error(`Promise timeout after ${time}`);
};
