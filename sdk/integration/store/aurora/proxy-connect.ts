import { Signer } from '@aws-sdk/rds-signer';
import { traceableFunction } from 'tracing';
import { DataSource } from 'typeorm';
import { BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions';

let dataSource: DataSource | undefined;

export const auroraProxyConnect = async ({
  entities,
}: Pick<BaseDataSourceOptions, 'entities' | 'migrations'>): Promise<DataSource> => {
  const cmd = async () => {
    if (!dataSource) {
      const signer = new Signer({ hostname: process.env.DB!, port: 5432, username: 'postgres' });
      const password = await signer.getAuthToken();
      dataSource = new DataSource({
        type: 'postgres',
        database: 'postgres',
        host: process.env.DB!,
        port: 5432,
        username: 'postgres',
        password,
        entities,
      });
      await dataSource.initialize();
    }
    return dataSource;
  };
  return traceableFunction('Connect', 'FAULT_AURORA_CONNECT', 'Connect', cmd);
};
