import 'reflect-metadata';

import { auroraClusterConnect } from '@sinapsis-co/cc-sdk/integration/database/aurora/cluster-connect';
import { metricRowGenerator } from '../demo-ingestion/gen';
import { RawMetric } from '../entities/raw-metric';

const secretArn = 'arn:aws:secretsmanager:us-east-1:331183547525:secret:ecs-template-dev-rds-demo-demo-wDF5V8';

const entities = [RawMetric];

export const handler = async () => {
  const start = Date.now();
  const dataSource = await auroraClusterConnect(secretArn, { entities: entities });
  console.log(`connection took ${Date.now() - start}ms`);

  const rawMetricRepository = dataSource.getRepository(RawMetric);

  const start2 = Date.now();
  const rows = metricRowGenerator();
  console.log('generated', rows!.length, 'records in', Date.now() - start2, 'ms');

  const start3 = Date.now();
  await Promise.all(rows!.map((row) => rawMetricRepository.save(row)));
  console.log('saved', rows!.length, 'records in', Date.now() - start3, 'ms');

  // await rawMetricRepository.save(row);
  // await rawMetricRepository.save({ tenantId: uuid(), sku: uuid(), marketplaceId: 'US', productAsin: uuid() });
  // await rawMetricRepository.delete({ tenantId: '99db8cc9-ab7f-4add-8c37-39691a81fdc6' });
};
