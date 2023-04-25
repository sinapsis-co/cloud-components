import * as S3 from '@aws-sdk/client-s3';
export declare const bucketPutObject: <TracingMeta extends Record<string, string> = Record<string, string>>(params: S3.PutObjectRequest, tracingMeta?: TracingMeta | undefined) => Promise<S3.PutObjectOutput>;
export declare const bucketHeadObject: <TracingMeta extends Record<string, string> = Record<string, string>>(params: S3.HeadObjectRequest, tracingMeta?: TracingMeta | undefined) => Promise<S3.HeadObjectOutput>;
export declare const bucketGetObject: <TracingMeta extends Record<string, string> = Record<string, string>>(params: S3.GetObjectRequest, tracingMeta?: TracingMeta | undefined) => Promise<S3.GetObjectOutput & {
    Body: string;
}>;
export declare const bucketDeleteObject: <TracingMeta extends Record<string, string> = Record<string, string>>(params: S3.DeleteObjectRequest, tracingMeta?: TracingMeta | undefined) => Promise<S3.DeleteObjectOutput>;
export declare const bucketListObjects: <TracingMeta extends Record<string, string> = Record<string, string>>(params: S3.ListObjectsV2Request, tracingMeta?: TracingMeta | undefined) => Promise<S3.ListObjectsV2Output>;
