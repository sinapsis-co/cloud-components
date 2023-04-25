"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeLastEvaluatedKey = exports.encodeLastEvaluatedKey = void 0;
const encodeLastEvaluatedKey = (lastEvaluatedKey) => {
    if (!lastEvaluatedKey)
        return null;
    return Buffer.from(JSON.stringify(lastEvaluatedKey)).toString('base64');
};
exports.encodeLastEvaluatedKey = encodeLastEvaluatedKey;
const decodeLastEvaluatedKey = (lastEvaluatedKeyEncoded) => {
    try {
        if (!lastEvaluatedKeyEncoded)
            return undefined;
        return JSON.parse(Buffer.from(lastEvaluatedKeyEncoded, 'base64').toString('ascii'));
    }
    catch (error) {
        return undefined;
    }
};
exports.decodeLastEvaluatedKey = decodeLastEvaluatedKey;
