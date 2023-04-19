import { Signer } from '@aws-sdk/rds-signer';
import { PlatformFault } from 'error';
import { Sequelize } from 'sequelize';
import { Tracing } from 'tracing';

export const auroraProxyConnect = async (): Promise<Sequelize> => {
  const cmd = async () => {
    const hostname = process.env.DB_HOST;
    const port = 5432;
    const username = 'postgres';

    if (!hostname) throw new PlatformFault({ code: 'FAULT_AURORA_INVALID_HOST', detail: 'DB_HOST is not defined' });

    const signer = new Signer({
      hostname,
      port,
      username,
    });
    // log(await signer.getAuthToken());

    const sequelize = new Sequelize({
      username,
      host: hostname,
      port,
      dialect: 'postgres',
      // password,
      dialectOptions: {
        ssl: 'Amazon RDS',
        authPlugins: {
          mysql_clear_password: () => () => signer.getAuthToken(),
        },
      },
    });

    await sequelize.authenticate();

    return sequelize;
  };
  return Tracing.capture('Connect', 'FAULT_TS_WRITE', 'Connect', cmd);
};
