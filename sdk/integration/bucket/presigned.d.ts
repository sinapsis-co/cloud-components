import { PresignedPost } from '@aws-sdk/s3-presigned-post';
export type { PresignedPost } from '@aws-sdk/s3-presigned-post';
type PresignedPostParams = {
    Bucket: string;
    Key: string;
    ContentType: string;
    Expires?: number;
    ContentLengthRange?: {
        min: number;
        max: number;
    };
};
export declare const createPutPresignedUrl: (params: PresignedPostParams, metadata?: Record<string, string>) => Promise<PresignedPost>;
export declare const createGetPresignedUrl: (bucket: string, key: string, expires?: number) => Promise<string>;
