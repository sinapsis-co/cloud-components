import 'reflect-metadata';

import { auroraClusterConnect } from '@sinapsis-co/cc-sdk/integration/database/aurora/cluster-connect';
import { log } from 'console';
import { RawMetric } from '../entities/raw-metric';

const secretArn = 'arn:aws:secretsmanager:us-east-1:331183547525:secret:ecs-template-dev-rds-demo-demo-wDF5V8';

const entities = [RawMetric];

export const handler = async () => {
  const dataSource = await auroraClusterConnect(secretArn, { entities: entities });
  await dataSource.synchronize();
  log('Synchronized', entities);
};
