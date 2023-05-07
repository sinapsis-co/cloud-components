import 'reflect-metadata';

import { auroraClusterConnect } from '@sinapsis-co/cc-sdk/integration/store/aurora/cluster-connect';
import { log } from 'console';
import { RawMetric } from '../entities/raw-metric';

// TODO: Read ARN from output
const secretArn = 'arn:aws:secretsmanager:us-east-1:331183547525:secret:ecs-template-dev-rds-demo-demo-wDF5V8';

const entities = [RawMetric];

export const handler = async (): Promise<void> => {
  const dataSource = await auroraClusterConnect(secretArn, { entities: entities });
  await dataSource.synchronize();
  log('Synchronized', entities);
};
