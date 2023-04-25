import { DataSource } from 'typeorm';
import { BaseDataSourceOptions } from 'typeorm/data-source/BaseDataSourceOptions';
import { SecretConfig, SecretInterface } from 'catalog/secret';
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
export declare const secretConfig: SecretConfig<Secret>;
export declare const auroraClusterConnect: (secretArn: string, { entities }: Pick<BaseDataSourceOptions, 'entities' | 'migrations'>) => Promise<DataSource>;
