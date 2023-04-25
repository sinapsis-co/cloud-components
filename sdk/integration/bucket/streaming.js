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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bucketStreamGetObject = exports.bucketStreamUpload = void 0;
const S3 = __importStar(require("@aws-sdk/client-s3"));
const lib_storage_1 = require("@aws-sdk/lib-storage");
const stream_1 = __importDefault(require("stream"));
const tracing_1 = require("tracing");
const _1 = require(".");
const bucketStreamUpload = async (inputPipe, middleware, params, tracingMeta) => {
    const cmd = async () => {
        const pass = new stream_1.default.PassThrough();
        const uploader = new lib_storage_1.Upload({ client: _1.s3, params: { ...params, Body: pass } });
        inputPipe.pipe(middleware).pipe(pass);
        await uploader.done();
    };
    return tracing_1.Tracing.capture('StreamUpload', 'FAULT_S3_STREAM_UPLOAD', params.Bucket, cmd, {
        key: params.Key,
        ...tracingMeta,
    });
};
exports.bucketStreamUpload = bucketStreamUpload;
const bucketStreamGetObject = async (params, tracingMeta) => {
    const cmd = () => _1.s3.send(new S3.GetObjectCommand(params));
    return tracing_1.Tracing.capture('StreamGetObject', 'FAULT_S3_STREAM_GET_OBJECT', params.Bucket, cmd, {
        key: params.Key,
        ...tracingMeta,
    });
};
exports.bucketStreamGetObject = bucketStreamGetObject;
