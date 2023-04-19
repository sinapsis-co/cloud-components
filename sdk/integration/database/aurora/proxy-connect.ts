// import { Signer } from '@aws-sdk/rds-signer';
import { getRuntimeSecret } from 'integration/config/runtime-secret';
import { Sequelize } from 'sequelize';
import { Tracing } from 'tracing';

export const auroraConnect = async (): Promise<Sequelize> => {
  const cmd = async () => {
    // const hostname = 'ecs-template-dev-rds-demo-demo.cluster-cso3na1byo3y.us-east-1.rds.amazonaws.com';
    // const port = 5432;
    // const username = 'admin';

    // const signer = new Signer({
    //   hostname,
    //   port,
    //   username,
    // });
    // log(await signer.getAuthToken());

    const { username, host, port, password } = await getRuntimeSecret<Secret>(
      secretConfig,
      'arn:aws:secretsmanager:us-east-1:331183547525:secret:ecs-template-dev-rds-demo-demo-wDF5V8'
    );

    const sequelize = new Sequelize({
      username,
      host,
      port,
      dialect: 'postgres',
      password,
      // dialectOptions: {
      //   ssl: 'Amazon RDS',
      //   authPlugins: {
      // mysql_clear_password: () => () => signer.getAuthToken(),
      //   },
      // },
    });

    await sequelize.authenticate();

    return sequelize;
  };
  return Tracing.capture('Connect', 'FAULT_TS_WRITE', 'Connect', cmd);
};

(async () => {
  await auroraConnect();
})();

import { SecretConfig, SecretInterface } from '@sinapsis-co/cc-sdk/catalog/secret';

export type Secret = SecretInterface<{
  name: 'demo';
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
  name: 'demo',
};
