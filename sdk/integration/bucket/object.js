"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bucketListObjects = exports.bucketDeleteObject = exports.bucketGetObject = exports.bucketHeadObject = exports.bucketPutObject = void 0;
const S3 = __importStar(require("@aws-sdk/client-s3"));
const tracing_1 = require("tracing");
const _1 = require(".");
const bucketPutObject = async (params, tracingMeta) => {
    const cmd = () => _1.s3.send(new S3.PutObjectCommand(params));
    return tracing_1.Tracing.capture('PutObject', 'FAULT_S3_PUT_OBJECT', params.Bucket, cmd, {
        key: params.Key,
        ...tracingMeta,
    });
};
exports.bucketPutObject = bucketPutObject;
const bucketHeadObject = async (params, tracingMeta) => {
    const cmd = () => _1.s3.send(new S3.HeadObjectCommand(params));
    return tracing_1.Tracing.capture('HeadObject', 'FAULT_S3_HEAD_OBJECT', params.Bucket, cmd, {
        key: params.Key,
        ...tracingMeta,
    });
};
exports.bucketHeadObject = bucketHeadObject;
const bucketGetObject = async (params, tracingMeta) => {
    const streamToString = (stream) => new Promise((resolve, reject) => {
        const chunks = [];
        stream.on('data', (chunk) => chunks.push(chunk));
        stream.on('error', reject);
        stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    });
    const cmd = async () => {
        const { Body, ...att } = await _1.s3.send(new S3.GetObjectCommand(params));
        const bodyContents = await streamToString(Body);
        return { Body: bodyContents, ...att };
    };
    return tracing_1.Tracing.capture('GetObject', 'FAULT_S3_GET_OBJECT', params.Bucket, cmd, {
        key: params.Key,
        ...tracingMeta,
    });
};
exports.bucketGetObject = bucketGetObject;
const bucketDeleteObject = async (params, tracingMeta) => {
    const cmd = () => _1.s3.send(new S3.DeleteObjectCommand(params));
    return tracing_1.Tracing.capture('DeleteObject', 'FAULT_S3_DELETE_OBJECT', params.Bucket, cmd, {
        key: params.Key,
        ...tracingMeta,
    });
};
exports.bucketDeleteObject = bucketDeleteObject;
const bucketListObjects = async (params, tracingMeta) => {
    const cmd = () => _1.s3.send(new S3.ListObjectsV2Command(params));
    return tracing_1.Tracing.capture('ListObjects', 'FAULT_S3_LIST_OBJECT', params.Bucket, cmd, tracingMeta);
};
exports.bucketListObjects = bucketListObjects;
