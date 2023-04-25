"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auroraProxyConnect = void 0;
const rds_signer_1 = require("@aws-sdk/rds-signer");
const tracing_1 = require("tracing");
const typeorm_1 = require("typeorm");
let dataSource;
const auroraProxyConnect = async (secretArn, { entities }) => {
    const cmd = async () => {
        if (!dataSource) {
            const signer = new rds_signer_1.Signer({ hostname: process.env.DB_HOST, port: 5432, username: 'postgres' });
            dataSource = new typeorm_1.DataSource({
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
    return tracing_1.Tracing.capture('Connect', 'FAULT_AURORA_CONNECT', 'Connect', cmd);
};
exports.auroraProxyConnect = auroraProxyConnect;
