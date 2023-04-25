"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const error_1 = require("error");
const dispatch_event_1 = require("integration/event/dispatch-event");
const tracing_1 = require("tracing");
const __1 = require("..");
const deleteItem = (repoConfig, dynamodb) => {
    return async (key, params) => {
        const tableName = process.env[(0, __1.parseTableName)(repoConfig.tableName)];
        const serializedKey = repoConfig.keySerialize(key);
        const cmd = async () => {
            const { Attributes } = await dynamodb
                .send(new lib_dynamodb_1.DeleteCommand({
                TableName: tableName,
                Key: serializedKey,
                ReturnValues: 'ALL_OLD',
                ...params,
            }))
                .catch((e) => {
                if (e.name === 'ConditionalCheckFailedException')
                    throw new error_1.PlatformError({ code: 'ERROR_CONDITIONAL_CHECK_FAILED', statusCode: 400 });
                else
                    throw e;
            });
            if (!Attributes)
                throw new error_1.PlatformError({ code: 'ERROR_ITEM_NOT_FOUND', statusCode: 404 });
            const entity = repoConfig.entityDeserialize(Attributes);
            if (params === null || params === void 0 ? void 0 : params.emitEvent) {
                await (0, dispatch_event_1.dispatchEvent)({ name: `app.${repoConfig.repoName}.deleted`, source: 'app' }, entity);
            }
            return entity;
        };
        const meta = { tableName, rawKey: key, serializedKey, params };
        return tracing_1.Tracing.capture('deleteItem', 'FAULT_DYN_DELETE_ITEM', JSON.stringify(key), cmd, meta);
    };
};
exports.deleteItem = deleteItem;
