/* eslint-disable */

const NUM_SELLERS = 40;
const MARKETPLACES_PER_SELLER = 10;
const PARENT_ASINS_PER_MARKETPLACE = 10;
const CHILD_ASINS_PER_PARENT_ASIN = 5;
const NUM_DAYS = 2 * 365;

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

function finiteTimesArray(days: number): string[] {
  const millisPerDay = 24 * 60 * 60 * 1000;
  const now = Date.now();
  const arr: string[] = [];
  for (let daysAgo = days - 1; daysAgo >= 0; daysAgo--) {
    arr.push(new Date(now - daysAgo * millisPerDay).toISOString().split('T')[0]);
  }
  return arr;
}

function randomPrimaryVariant() {
  const random = Math.random();
  if (random > 0.2 && random < 0.4) return 'S';
  if (random > 0.4 && random < 0.6) return 'M';
  if (random > 0.6 && random < 0.8) return 'L';
  return 'XL';
}
function randomSecondaryVariant() {
  const random = Math.random();
  if (random > 0.2 && random < 0.4) return 'Red';
  if (random > 0.4 && random < 0.6) return 'Blue';
  if (random > 0.6 && random < 0.8) return 'Grey';
  return 'Black';
}

export const metricRowGenerator = () => {
  const sellers = finiteNameArray('seller', NUM_SELLERS);
  const marketplaces = finiteNameArray('marketplace', MARKETPLACES_PER_SELLER);
  const times = finiteTimesArray(NUM_DAYS);
  const metricColumns = ['unitCount', 'orderCount', 'totalSales', 'price'];
  //infinite generators let us have unique names across loop iterations which is neat
  const parentAsins = infiniteNameGenerator('P', 9);
  const childAsins = infiniteNameGenerator('C', 9);
  const skus = infiniteNameGenerator('SKU', 8);
  const rows: any[] = [];
  for (const time of times) {
    for (const tenantId of sellers) {
      for (const marketplaceId of marketplaces) {
        for (const productAsin of take(PARENT_ASINS_PER_MARKETPLACE, parentAsins)) {
          for (let childAsin of take(CHILD_ASINS_PER_PARENT_ASIN, childAsins)) {
            const variantAsin = Math.random() > 0.3 ? childAsin : undefined;
            const sku = skus.next().value;
            const row: any = {
              time,
              tenantId,
              marketplaceId,
              productAsin,
              variantAsin,
              sku,
            };
            if (variantAsin) {
              row.primaryVariant = randomPrimaryVariant();
              row.secondaryVariant = randomSecondaryVariant();
            }
            for (const metricColumn of metricColumns) {
              row[metricColumn] = Math.round(Math.random() * 999);
            }
            rows.push(row);
          }
        }
      }
    }
    return rows;
  }
};
