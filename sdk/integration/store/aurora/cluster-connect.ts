import { DataSource } from 'typeorm';
import { BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions';

import { SecretConfig, SecretInterface } from 'catalog/secret';
import { getRuntimeSecret } from 'integration/config/runtime-secret';
import { traceableFunction } from 'tracing';

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
  { entities }: Pick<BaseDataSourceOptions, 'entities' | 'migrations'>
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
        entities,
        // database: 'test',
        // entities: [Photo],
        // synchronize: true,
        // logging: false,
      });
      await dataSource.initialize();
    }
    return dataSource;
  };
  return traceableFunction('Connect', 'FAULT_AURORA_CONNECT', 'Connect', cmd);
};
