"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.softDeleteItem = void 0;
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const dayjs_1 = __importDefault(require("dayjs"));
const __1 = require("..");
const error_1 = require("error");
const dispatch_event_1 = require("integration/event/dispatch-event");
const tracing_1 = require("tracing");
const update_mapper_1 = require("../update-mapper");
const softDeleteItem = (repoConfig, dynamodb) => {
    return async (key, params) => {
        const tableName = process.env[(0, __1.parseTableName)(repoConfig.tableName)];
        const serializedKey = repoConfig.keySerialize(key);
        const ttl = (params === null || params === void 0 ? void 0 : params.deleteAfter) || { amount: 30, period: 'days' };
        const mapper = (0, update_mapper_1.updateMapper)({
            deleted: true,
            deleteTTL: (0, dayjs_1.default)().add(ttl.amount, ttl.period).unix(),
        });
        const cmd = async () => {
            const { Attributes } = await dynamodb
                .send(new lib_dynamodb_1.UpdateCommand({
                TableName: tableName,
                Key: serializedKey,
                ReturnValues: 'ALL_NEW',
                ...mapper,
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
        const meta = { tableName, rawKey: key, serializedKey, ttl, mapper, params };
        return tracing_1.Tracing.capture('softDeleteItem', 'FAULT_DYN_SOFT_DELETE_ITEM', JSON.stringify(key), cmd, meta);
    };
};
exports.softDeleteItem = softDeleteItem;
