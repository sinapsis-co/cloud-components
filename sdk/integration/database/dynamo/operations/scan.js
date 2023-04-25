"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scanTable = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const __1 = require("..");
const error_1 = require("error");
const tracing_1 = require("tracing");
const pagination_1 = require("util/pagination");
const scanTable = (repoConfig, dynamodb) => {
    return async (queryParams, params) => {
        const tableName = process.env[(0, __1.parseTableName)(repoConfig.tableName)];
        const cmd = async () => {
            const { Items, LastEvaluatedKey } = await dynamodb
                .send(new lib_dynamodb_1.ScanCommand({
                TableName: tableName,
                ExclusiveStartKey: (0, pagination_1.decodeLastEvaluatedKey)(queryParams.nextToken),
                Limit: queryParams.limit,
                ...params,
            }))
                .catch((e) => {
                throw new error_1.PlatformFault({ code: 'FAULT_DYN_SCAN_TABLE', detail: e.message });
            });
            return {
                items: Items ? Items.map((item) => repoConfig.entityDeserialize(item)) : [],
                nextToken: (0, pagination_1.encodeLastEvaluatedKey)(LastEvaluatedKey),
            };
        };
        const meta = { tableName, params };
        return tracing_1.Tracing.capture('scanTable', 'FAULT_DYN_SCAN_TABLE', 'scan', cmd, meta);
    };
};
exports.scanTable = scanTable;
