/* eslint-disable */

//just an idea for code that can generate fake marketplace/asin/sku/metric data

export {};

const NUM_SELLERS = 100;
const MARKETPLACES_PER_SELLER = 10;
const PARENT_ASINS_PER_MARKETPLACE = 10;
const CHILD_ASINS_PER_PARENT_ASIN = 5;
const NUM_DAYS = 2 * 365;
const NUM_METRIC_COLUMNS = 100;

function* take<T>(n: number, gen: Generator<T>): Generator<T> {
  for (let i = 0; i < n; i++) {
    let { done, value } = gen.next();
    if (done) {
      return;
    }
    yield value;
  }
}

function* infiniteNameGenerator(prefix: string, width = 8): Generator<string> {
  for (let i = 0; true; i++) {
    yield prefix + String(i).padStart(width, '0');
  }
}

function finiteNameArray(prefix: string, count: number): string[] {
  const maxWidth = String(count - 1).length;
  let arr: string[] = [];
  for (const v of take(count, infiniteNameGenerator(prefix, maxWidth))) {
    arr.push(v);
  }
  return arr;
}

function finiteTimesArray(days: number): Date[] {
  const millisPerDay = 24 * 60 * 60 * 1000;
  const now = Date.now();
  const arr: Date[] = [];
  for (let daysAgo = days - 1; daysAgo >= 0; daysAgo--) {
    arr.push(new Date(now - daysAgo * millisPerDay));
  }
  return arr;
}

function* metricRowGenerator() {
  const sellers = finiteNameArray('seller', NUM_SELLERS);
  const marketplaces = finiteNameArray('marketplace', MARKETPLACES_PER_SELLER);
  const times = finiteTimesArray(NUM_DAYS);
  const metricColumns = ['unitCount', 'orderCount', 'totalSales', 'price'];
  //infinite generators let us have unique names across loop iterations which is neat
  const parentAsins = infiniteNameGenerator('P', 9);
  const childAsins = infiniteNameGenerator('C', 9);
  const skus = infiniteNameGenerator('SKU', 8);
  for (const time of times) {
    for (const tenantId of sellers) {
      for (const marketplace of marketplaces) {
        for (const parentAsin of take(PARENT_ASINS_PER_MARKETPLACE, parentAsins)) {
          for (const childAsin of take(CHILD_ASINS_PER_PARENT_ASIN, childAsins)) {
            const sku = skus.next().value;
            const row = { time, tenantId, marketplace, parentAsin, childAsin, sku };
            for (const metricColumn of metricColumns) {
              row[metricColumn] = Math.round(Math.random() * 999);
            }
            yield row;
          }
        }
      }
    }
  }
}

export const handler = () => {
  const start = Date.now();
  let i = 0;
  for (let row of metricRowGenerator()) {
    if (i === 0) {
      console.log(row);
    }
    i++;
    //TODO: insert into db
  }
  const elapsed = Date.now() - start;
  console.log('generated', i, 'records in', elapsed, 'ms');
};
