"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getItem = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const error_1 = require("error");
const tracing_1 = require("tracing");
const __1 = require("..");
const getItem = (repoConfig, dynamodb) => {
    return async (key, params) => {
        const tableName = process.env[(0, __1.parseTableName)(repoConfig.tableName)];
        const serializedKey = repoConfig.keySerialize(key);
        const cmd = async () => {
            const { Item } = await dynamodb.send(new lib_dynamodb_1.GetCommand({ TableName: tableName, Key: serializedKey, ...params }));
            if (!Item)
                throw new error_1.PlatformError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });
            return repoConfig.entityDeserialize(Item);
        };
        const meta = { tableName, rawKey: key, serializedKey, params };
        return tracing_1.Tracing.capture('getItem', 'FAULT_DYN_GET_ITEM', JSON.stringify(key), cmd, meta);
    };
};
exports.getItem = getItem;
