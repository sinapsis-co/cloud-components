import { auroraClusterConnect } from '@sinapsis-co/cc-sdk/integration/database/aurora/cluster-connect';
import { log } from 'console';
import { builder } from './models/order-metric';

export const handler = async () => {
  log('Running sync...');
  const sequelize = await auroraClusterConnect(
    'arn:aws:secretsmanager:us-east-1:331183547525:secret:ecs-template-dev-rds-demo-demo-wDF5V8'
  );

  await builder(sequelize);

  // await sequelize.sync();
};
