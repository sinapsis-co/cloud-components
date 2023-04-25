"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listIndex = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const tracing_1 = require("tracing");
const pagination_1 = require("util/pagination");
const __1 = require("..");
const listIndex = (repoConfig, dynamodb) => {
    return async (index, queryParams, params) => {
        const tableName = process.env[(0, __1.parseTableName)(repoConfig.tableName)];
        const cmd = async () => {
            const { Items, LastEvaluatedKey } = await dynamodb.send(new lib_dynamodb_1.QueryCommand({
                TableName: tableName,
                IndexName: index,
                ExclusiveStartKey: (0, pagination_1.decodeLastEvaluatedKey)(queryParams.nextToken),
                Limit: queryParams.limit,
                ...params,
            }));
            return {
                items: Items ? Items.map((item) => repoConfig.entityDeserialize(item)) : [],
                nextToken: (0, pagination_1.encodeLastEvaluatedKey)(LastEvaluatedKey),
            };
        };
        const meta = { tableName, index, params };
        return tracing_1.Tracing.capture('listIndex', 'FAULT_DYN_LIST_INDEX', String(index), cmd, meta);
    };
};
exports.listIndex = listIndex;
