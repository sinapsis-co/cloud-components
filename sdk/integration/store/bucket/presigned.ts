import { GetObjectCommand } from '@aws-sdk/client-s3';
import { createPresignedPost, PresignedPost } from '@aws-sdk/s3-presigned-post';
import { Conditions } from '@aws-sdk/s3-presigned-post/dist-types/types';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { traceableFunction } from 'tracing';
import { s3 } from '.';

export type { PresignedPost } from '@aws-sdk/s3-presigned-post';

const DEFAULT_MAX_LENGTH = 1024 * 1024 * 5; // 5 MB

type PresignedPostParams = {
  Bucket: string;
  Key: string;
  ContentType: string;
  Expires?: number;
  ContentLengthRange?: { min: number; max: number };
};

export const createPutPresignedUrl = async (
  params: PresignedPostParams,
  metadata?: Record<string, string>
): Promise<PresignedPost> => {
  const { Key, ContentType, ContentLengthRange, Bucket, Expires } = params;
  const cmd = () => {
    const conditions: Conditions[] = [
      ['content-length-range', ContentLengthRange?.min ?? 0, ContentLengthRange?.max ?? DEFAULT_MAX_LENGTH],
    ];
    let finalMetadata: Record<string, string> = {};

    if (metadata) {
      Object.keys(metadata).forEach((md) => {
        conditions.push(['starts-with', `$x-amz-meta-${md}`, `${metadata[md]}`]);
        finalMetadata = {
          ...finalMetadata,
          [`x-amz-meta-${md}`]: metadata[md],
        };
      });
    }

    return createPresignedPost(s3, {
      Bucket,
      Expires: Expires || 3600,
      Key,
      Fields: { 'Content-Type': ContentType, ...finalMetadata },
      Conditions: conditions,
    });
  };
  return traceableFunction('CreatePutPresignedUrl', 'FAULT_S3_PRESIGNED_PUT', Bucket, cmd, { key: Key });
};

export const createGetPresignedUrl = async (bucket: string, key: string, expires = 3600): Promise<string> => {
  const cmd = () => getSignedUrl(s3, new GetObjectCommand({ Bucket: bucket, Key: key }), { expiresIn: expires });
  return traceableFunction('CreateGetPresignedUrl', 'FAULT_S3_PRESIGNED_GET', bucket, cmd, { key });
};
