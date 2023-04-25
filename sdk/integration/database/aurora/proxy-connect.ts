import { Signer } from '@aws-sdk/rds-signer';
import { Tracing } from 'tracing';
import { DataSource } from 'typeorm';
import { BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions';

let dataSource: DataSource | undefined;

export const auroraProxyConnect = async (
  secretArn: string,
  { entities }: Pick<BaseDataSourceOptions, 'entities' | 'migrations'>
): Promise<DataSource> => {
  const cmd = async () => {
    if (!dataSource) {
      const signer = new Signer({ hostname: process.env.DB_HOST!, port: 5432, username: 'postgres' });
      dataSource = new DataSource({
        type: 'postgres',
        database: 'postgres',
        host: process.env.DB_HOST,
        port: 5432,
        username: 'postgres',
        password: await signer.getAuthToken(),
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
  return Tracing.capture('Connect', 'FAULT_AURORA_CONNECT', 'Connect', cmd);
};
