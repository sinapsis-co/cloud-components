"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGetPresignedUrl = exports.createPutPresignedUrl = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const s3_presigned_post_1 = require("@aws-sdk/s3-presigned-post");
const s3_request_presigner_1 = require("@aws-sdk/s3-request-presigner");
const tracing_1 = require("tracing");
const _1 = require(".");
const DEFAULT_MAX_LENGTH = 1024 * 1024 * 5; // 5 MB
const createPutPresignedUrl = async (params, metadata) => {
    const { Key, ContentType, ContentLengthRange, Bucket, Expires } = params;
    const cmd = () => {
        var _a, _b;
        return (0, s3_presigned_post_1.createPresignedPost)(_1.s3, {
            Bucket,
            Expires: Expires || 3600,
            Key,
            Fields: { 'Content-Type': ContentType, ...(metadata || {}) },
            Conditions: [
                ['content-length-range', (_a = ContentLengthRange === null || ContentLengthRange === void 0 ? void 0 : ContentLengthRange.min) !== null && _a !== void 0 ? _a : 0, (_b = ContentLengthRange === null || ContentLengthRange === void 0 ? void 0 : ContentLengthRange.max) !== null && _b !== void 0 ? _b : DEFAULT_MAX_LENGTH],
            ],
        });
    };
    return tracing_1.Tracing.capture('CreatePutPresignedUrl', 'FAULT_S3_PRESIGNED_PUT', Bucket, cmd, { key: Key });
};
exports.createPutPresignedUrl = createPutPresignedUrl;
const createGetPresignedUrl = async (bucket, key, expires = 3600) => {
    const cmd = () => (0, s3_request_presigner_1.getSignedUrl)(_1.s3, new client_s3_1.GetObjectCommand({ Bucket: bucket, Key: key }), { expiresIn: expires });
    return tracing_1.Tracing.capture('CreateGetPresignedUrl', 'FAULT_S3_PRESIGNED_GET', bucket, cmd, { key });
};
exports.createGetPresignedUrl = createGetPresignedUrl;
