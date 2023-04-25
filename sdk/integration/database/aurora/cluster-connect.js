"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auroraClusterConnect = exports.secretConfig = void 0;
const typeorm_1 = require("typeorm");
const runtime_secret_1 = require("integration/config/runtime-secret");
const tracing_1 = require("tracing");
exports.secretConfig = {
    name: 'connection',
};
let dataSource;
const auroraClusterConnect = async (secretArn, { entities }) => {
    const cmd = async () => {
        if (!dataSource) {
            const { username, host, port, password } = await (0, runtime_secret_1.getRuntimeSecret)(exports.secretConfig, secretArn);
            dataSource = new typeorm_1.DataSource({
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
    return tracing_1.Tracing.capture('Connect', 'FAULT_AURORA_CONNECT', 'Connect', cmd);
};
exports.auroraClusterConnect = auroraClusterConnect;
