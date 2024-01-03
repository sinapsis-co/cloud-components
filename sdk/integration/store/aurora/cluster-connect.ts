import { DataSource } from 'typeorm';

import { SecretConfig, SecretInterface } from 'catalog/secret';
import { getRuntimeSecret } from 'integration/config/runtime-secret';
import { traceableFunction } from 'tracing';
import { CustomDataSourceOptions } from './proxy-connect';

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

let dataSource: DataSource | undefined;

export const auroraClusterConnect = async (
  secretArn: string,
  parameters: CustomDataSourceOptions
): Promise<DataSource> => {
  const cmd = async () => {
    if (!dataSource) {
      const { username, host, port, password } = await getRuntimeSecret<Secret>(secretConfig, secretArn);
      dataSource = new DataSource({
        type: 'postgres',
        database: 'postgres',
        host,
        port,
        username,
        password,
        ...parameters,
      });
      await dataSource.initialize();
    }
    return dataSource;
  };
  return traceableFunction('Connect', 'FAULT_AURORA_CONNECT', 'Connect', cmd);
};
