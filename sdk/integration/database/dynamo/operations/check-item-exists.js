"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkItemExists = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const tracing_1 = require("tracing");
const __1 = require("..");
const checkItemExists = (repoConfig, dynamodb) => {
    return async (key, params) => {
        const tableName = process.env[(0, __1.parseTableName)(repoConfig.tableName)];
        const serializedKey = repoConfig.keySerialize(key);
        const cmd = async () => {
            const { Item } = await dynamodb.send(new lib_dynamodb_1.GetCommand({ TableName: tableName, Key: serializedKey, ...params }));
            if (!Item)
                return { exists: false };
            return { exists: true, entity: repoConfig.entityDeserialize(Item) };
        };
        const meta = { tableName, rawKey: key, serializedKey, params };
        return tracing_1.Tracing.capture('checkItemExists', 'FAULT_DYN_CHECK_ITEM_EXISTS', JSON.stringify(key), cmd, meta);
    };
};
exports.checkItemExists = checkItemExists;
