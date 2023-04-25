"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTableName = exports.readOnlyRepository = exports.repository = exports.dynamodb = void 0;
const batch_create_1 = require("./operations/batch-create");
const batch_get_1 = require("./operations/batch-get");
const check_item_exists_1 = require("./operations/check-item-exists");
const create_1 = require("./operations/create");
const delete_1 = require("./operations/delete");
const get_1 = require("./operations/get");
const list_1 = require("./operations/list");
const list_index_1 = require("./operations/list-index");
const recover_1 = require("./operations/recover");
const scan_1 = require("./operations/scan");
const soft_delete_1 = require("./operations/soft-delete");
const update_1 = require("./operations/update");
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const lib_dynamodb_1 = require("@aws-sdk/lib-dynamodb");
const tracing_1 = require("tracing");
const client = tracing_1.Tracing.captureIntegration(new client_dynamodb_1.DynamoDBClient({}));
exports.dynamodb = lib_dynamodb_1.DynamoDBDocumentClient.from(client);
const repository = (repoConfig) => {
    return {
        events: {
            created: { name: `app.${repoConfig.repoName}.created`, source: 'app' },
            updated: { name: `app.${repoConfig.repoName}.updated`, source: 'app' },
            deleted: { name: `app.${repoConfig.repoName}.deleted`, source: 'app' },
            recovered: { name: `app.${repoConfig.repoName}.recovered`, source: 'app' },
        },
        entitySerialize: repoConfig.entitySerialize,
        entityDeserialize: repoConfig.entityDeserialize,
        createItem: (0, create_1.createItem)(repoConfig, exports.dynamodb),
        checkItemExists: (0, check_item_exists_1.checkItemExists)(repoConfig, exports.dynamodb),
        getItem: (0, get_1.getItem)(repoConfig, exports.dynamodb),
        listItem: (0, list_1.listItem)(repoConfig, exports.dynamodb),
        deleteItem: (0, delete_1.deleteItem)(repoConfig, exports.dynamodb),
        updateItem: (0, update_1.updateItem)(repoConfig, exports.dynamodb),
        batchCreateItem: (0, batch_create_1.batchCreateItem)(repoConfig, exports.dynamodb),
        batchGetItem: (0, batch_get_1.batchGetItem)(repoConfig, exports.dynamodb),
        softDeleteItem: (0, soft_delete_1.softDeleteItem)(repoConfig, exports.dynamodb),
        recoverItem: (0, recover_1.recoverItem)(repoConfig, exports.dynamodb),
        scanTable: (0, scan_1.scanTable)(repoConfig, exports.dynamodb),
        listIndex: (0, list_index_1.listIndex)(repoConfig, exports.dynamodb),
    };
};
exports.repository = repository;
const readOnlyRepository = (repoConfig) => {
    return {
        entityDeserialize: repoConfig.entityDeserialize,
        checkItemExists: (0, check_item_exists_1.checkItemExists)(repoConfig, exports.dynamodb),
        batchGetItem: (0, batch_get_1.batchGetItem)(repoConfig, exports.dynamodb),
        getItem: (0, get_1.getItem)(repoConfig, exports.dynamodb),
        listItem: (0, list_1.listItem)(repoConfig, exports.dynamodb),
        scanTable: (0, scan_1.scanTable)(repoConfig, exports.dynamodb),
        listIndex: (0, list_index_1.listIndex)(repoConfig, exports.dynamodb),
    };
};
exports.readOnlyRepository = readOnlyRepository;
const parseTableName = (tableName) => {
    return `TABLE_${tableName.toLocaleUpperCase().split('-').join('_')}`;
};
exports.parseTableName = parseTableName;
