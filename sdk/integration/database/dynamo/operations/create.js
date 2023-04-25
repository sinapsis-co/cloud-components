"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createItem = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const error_1 = require("@sinapsis-co/cc-sdk/error");
const dispatch_event_1 = require("integration/event/dispatch-event");
const tracing_1 = require("tracing");
const __1 = require("..");
const createItem = (repoConfig, dynamodb) => {
    return async (key, entityCreate, params) => {
        const tableName = process.env[(0, __1.parseTableName)(repoConfig.tableName)];
        const serializedItem = repoConfig.entitySerialize(key, entityCreate);
        const cmd = async () => {
            await dynamodb.send(new lib_dynamodb_1.PutCommand({ TableName: tableName, Item: serializedItem, ...params })).catch((e) => {
                if (e.name === 'ConditionalCheckFailedException')
                    throw new error_1.PlatformError({ code: 'ERROR_CONDITIONAL_CHECK_FAILED', statusCode: 400 });
                else
                    throw e;
            });
            const entity = repoConfig.entityDeserialize(serializedItem);
            if (params === null || params === void 0 ? void 0 : params.emitEvent) {
                await (0, dispatch_event_1.dispatchEvent)({ name: `app.${repoConfig.repoName}.created`, source: 'app' }, entity);
            }
            return entity;
        };
        const meta = { tableName, rawKey: key, serializedItem, params };
        return tracing_1.Tracing.capture('createItem', 'FAULT_DYN_CREATE_ITEM', JSON.stringify(key), cmd, meta);
    };
};
exports.createItem = createItem;
