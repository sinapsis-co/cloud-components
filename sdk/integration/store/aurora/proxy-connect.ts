import { Signer } from '@aws-sdk/rds-signer';
import { traceableFunction } from 'tracing';
import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export type CustomDataSourceOptions = Omit<
  Partial<PostgresConnectionOptions>,
  | 'database'
  | 'host'
  | 'port'
  | 'username'
  | 'password'
  | 'ssl'
  | 'extra'
  | 'migrations'
  | 'migrationsRun'
  | 'migrationsTableName'
  | 'synchronize'
  | 'driver'
  | 'type'
>;

let dataSource: DataSource | undefined;
let signerTime: number = 0;

export const auroraProxyConnect = async (parameters: CustomDataSourceOptions): Promise<DataSource> => {
  const cmd = async () => {
    const time = Date.now();
    if (time - signerTime > 90000) { // AFTER 15 MIN, SIGNER TOKEN EXPIRES
      signerTime = new Date().getTime();
      const signer = new Signer({ hostname: process.env.DB!, port: 5432, username: 'postgres' });
      const password = await signer.getAuthToken();
      dataSource = new DataSource({
        type: 'postgres',
        database: 'postgres',
        host: process.env.DB!,
        port: 5432,
        username: 'postgres',
        password,
        ssl: true,
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
        ...parameters,
      });
      await dataSource.initialize();
    }
    return dataSource!;
  };
  return traceableFunction('Connect', 'FAULT_AURORA_CONNECT', 'Connect', cmd);
};
