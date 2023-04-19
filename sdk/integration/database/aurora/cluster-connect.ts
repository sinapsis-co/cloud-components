import { SecretConfig, SecretInterface } from '@sinapsis-co/cc-sdk/catalog/secret';
import { getRuntimeSecret } from 'integration/config/runtime-secret';
import { Sequelize } from 'sequelize';
import { Tracing } from 'tracing';

export type Secret = SecretInterface<{
  name: 'connection';
  payload: {
    dbClusterIdentifier: string;
    password: string;
    engine: string;
    host: string;
    port: number;
    username: string;
  };
}>;
export const secretConfig: SecretConfig<Secret> = {
  name: 'connection',
};

export const auroraClusterConnect = async (secretArn: string): Promise<Sequelize> => {
  const cmd = async () => {
    const { username, host, port, password } = await getRuntimeSecret<Secret>(secretConfig, secretArn);

    const sequelize = new Sequelize({ username, host, port, password, dialect: 'postgres' });

    await sequelize.authenticate();

    return sequelize;
  };
  return Tracing.capture('Connect', 'FAULT_AURORA_CONNECT', 'Connect', cmd);
};

(async () => {
  await auroraClusterConnect(
    'arn:aws:secretsmanager:us-east-1:331183547525:secret:ecs-template-dev-rds-demo-demo-wDF5V8'
  );
})();
