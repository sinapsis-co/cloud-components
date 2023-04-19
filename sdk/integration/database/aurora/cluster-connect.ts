import { Sequelize } from 'sequelize';

import { SecretConfig, SecretInterface } from 'catalog/secret';
import { log } from 'console';
import { getRuntimeSecret } from 'integration/config/runtime-secret';
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

let sequelize: Sequelize | undefined;

export const auroraClusterConnect = async (secretArn: string): Promise<Sequelize> => {
  const cmd = async () => {
    if (!sequelize) {
      const { username, host, port, password } = await getRuntimeSecret<Secret>(secretConfig, secretArn);
      log(username, host, port, password);
      sequelize = new Sequelize({ username, host, port, password, dialect: 'postgres' });
    }
    return sequelize;
  };
  return Tracing.capture('Connect', 'FAULT_AURORA_CONNECT', 'Connect', cmd);
};
