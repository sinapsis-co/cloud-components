import { DataSource } from 'typeorm';
import { BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions';
export declare const auroraProxyConnect: (secretArn: string, { entities }: Pick<BaseDataSourceOptions, 'entities' | 'migrations'>) => Promise<DataSource>;
