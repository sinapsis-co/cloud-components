import { auroraClusterConnect } from '@sinapsis-co/cc-sdk/integration/database/aurora/cluster-connect';

export const handler = async () => {
  const sequelize = await auroraClusterConnect(
    'arn:aws:secretsmanager:us-east-1:331183547525:secret:ecs-template-dev-rds-demo-demo-wDF5V8'
  );

  await sequelize.authenticate();
};
