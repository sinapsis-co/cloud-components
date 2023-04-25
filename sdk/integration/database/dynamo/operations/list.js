"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listItem = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const error_1 = require("error");
const tracing_1 = require("tracing");
const pagination_1 = require("util/pagination");
const __1 = require("..");
const listItem = (repoConfig, dynamodb) => {
    return async (pk, queryParams, params) => {
        const tableName = process.env[(0, __1.parseTableName)(repoConfig.tableName)];
        const cmd = async () => {
            const { Items, LastEvaluatedKey } = await dynamodb
                .send(new lib_dynamodb_1.QueryCommand({
                TableName: tableName,
                KeyConditionExpression: '#pk = :pk',
                ExpressionAttributeNames: { '#pk': 'pk' },
                ExpressionAttributeValues: { ':pk': pk },
                ExclusiveStartKey: (0, pagination_1.decodeLastEvaluatedKey)(queryParams.nextToken),
                Limit: queryParams.limit,
                ...params,
            }))
                .catch((e) => {
                throw new error_1.PlatformFault({ code: 'FAULT_DYN_LIST_ITEM', detail: e.message });
            });
            return {
                items: Items ? Items.map((item) => repoConfig.entityDeserialize(item)) : [],
                nextToken: (0, pagination_1.encodeLastEvaluatedKey)(LastEvaluatedKey),
            };
        };
        const meta = { tableName, pk, params };
        return tracing_1.Tracing.capture('listItems', 'FAULT_DYN_LIST_ITEM', String(pk), cmd, meta);
    };
};
exports.listItem = listItem;
