"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchGetItem = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const error_1 = require("error");
const chunk_array_1 = require("util/chunk-array");
const executers_1 = require("util/executers");
const __1 = require("..");
const batchGetItem = (repoConfig, dynamodb, params) => {
    return async (keys) => {
        const table = process.env[(0, __1.parseTableName)(repoConfig.tableName)];
        const items = keys.map((k) => repoConfig.keySerialize(k));
        const chunk = (0, chunk_array_1.chunkArray)(items, 100);
        const result = await Promise.all(chunk.map(async (c) => {
            const RequestItems = { [table]: { Keys: c } };
            const response = await call(dynamodb, RequestItems, table, params === null || params === void 0 ? void 0 : params.autoRetry);
            return response.map((item) => {
                return repoConfig.entityDeserialize(item);
            });
        }));
        return result.flat();
    };
};
exports.batchGetItem = batchGetItem;
const call = async (dynamodb, RequestItems, table, autoRetry) => {
    const responses = [];
    const { UnprocessedKeys, Responses } = await dynamodb.send(new lib_dynamodb_1.BatchGetCommand({ RequestItems })).catch((e) => {
        throw new error_1.PlatformFault({ code: 'FAULT_DYN_BATCH_GET_ITEM', detail: e.message });
    });
    if (Responses && Responses[table])
        responses.push(...Responses[table]);
    if (autoRetry && UnprocessedKeys && UnprocessedKeys[table]) {
        await (0, executers_1.wait)(Math.ceil(Math.random() * 2000));
        responses.push(...(await call(dynamodb, UnprocessedKeys, table)));
    }
    return responses;
};
