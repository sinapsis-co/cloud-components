import * as S3 from '@aws-sdk/client-s3';
import { Readable } from 'stream';
export declare const bucketStreamUpload: <TracingMeta extends Record<string, string> = Record<string, string>>(inputPipe: Readable, middleware: any, params: S3.PutObjectCommandInput, tracingMeta?: TracingMeta | undefined) => Promise<void>;
export declare const bucketStreamGetObject: <TracingMeta extends Record<string, string> = Record<string, string>>(params: S3.GetObjectRequest, tracingMeta?: TracingMeta | undefined) => Promise<S3.GetObjectOutput>;
