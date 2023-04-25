"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchCreateItem = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const error_1 = require("error");
const chunk_array_1 = require("util/chunk-array");
const executers_1 = require("util/executers");
const __1 = require("..");
const batchCreateItem = (repoConfig, dynamodb, params) => {
    return async (items) => {
        const table = process.env[(0, __1.parseTableName)(repoConfig.tableName)];
        const entities = items.map((e) => repoConfig.entitySerialize(e.key, e.entityCreate));
        const chunk = (0, chunk_array_1.chunkArray)(entities, 25);
        await Promise.all(chunk.map(async (c) => {
            const RequestItems = {
                [table]: c.map((Item) => {
                    return { PutRequest: { Item } };
                }),
            };
            await call(dynamodb, RequestItems, table, params === null || params === void 0 ? void 0 : params.autoRetry);
        }));
        return entities.map((i) => repoConfig.entityDeserialize(i));
    };
};
exports.batchCreateItem = batchCreateItem;
const call = async (dynamodb, RequestItems, table, autoRetry) => {
    const { UnprocessedItems } = await dynamodb.send(new lib_dynamodb_1.BatchWriteCommand({ RequestItems })).catch((e) => {
        throw new error_1.PlatformFault({ code: 'FAULT_DYN_BATCH_CREATE_ITEM', detail: e.message });
    });
    if (autoRetry && UnprocessedItems && UnprocessedItems[table]) {
        await (0, executers_1.wait)(Math.ceil(Math.random() * 2000));
        await call(dynamodb, UnprocessedItems, table, autoRetry);
    }
};
