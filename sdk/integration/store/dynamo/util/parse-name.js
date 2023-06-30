"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTableName = void 0;
const parseTableName = (tableName) => {
    return `TABLE_${tableName.toLocaleUpperCase().split('-').join('_')}`;
};
exports.parseTableName = parseTableName;
