"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recoverItem = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const __1 = require("..");
const error_1 = require("error");
const dispatch_event_1 = require("integration/event/dispatch-event");
const tracing_1 = require("tracing");
const recoverItem = (repoConfig, dynamodb) => {
    return async (key, params) => {
        const tableName = process.env[(0, __1.parseTableName)(repoConfig.tableName)];
        const serializedKey = repoConfig.keySerialize(key);
        const cmd = async () => {
            const { Attributes } = await dynamodb
                .send(new lib_dynamodb_1.UpdateCommand({
                TableName: tableName,
                Key: serializedKey,
                ReturnValues: 'ALL_NEW',
                UpdateExpression: 'REMOVE #deleteTTL',
                ExpressionAttributeNames: { '#deleteTTL': 'deleteTTL' },
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
                await (0, dispatch_event_1.dispatchEvent)({ name: `app.${repoConfig.repoName}.recovered`, source: 'app' }, entity);
            }
            return entity;
        };
        const meta = { tableName, rawKey: key, serializedKey, params };
        return tracing_1.Tracing.capture('recoverItem', 'FAULT_DYN_RECOVER_ITEM', JSON.stringify(key), cmd, meta);
    };
};
exports.recoverItem = recoverItem;
