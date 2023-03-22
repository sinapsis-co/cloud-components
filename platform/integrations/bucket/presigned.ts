import { GetObjectCommand } from '@aws-sdk/client-s3';
import { createPresignedPost, PresignedPost } from '@aws-sdk/s3-presigned-post';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
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
  const { Key, ContentType, ContentLengthRange, ...rest } = params;

  return createPresignedPost(s3, {
    ...rest,
    Expires: 3600,
    Key,
    Fields: { 'Content-Type': ContentType, ...(metadata || {}) },
    Conditions: [['content-length-range', ContentLengthRange?.min ?? 0, ContentLengthRange?.max ?? DEFAULT_MAX_LENGTH]],
  });
};

export const createGetPresignedUrl = async (bucket: string, key: string, expires = 3600): Promise<string> => {
  return getSignedUrl(s3, new GetObjectCommand({ Bucket: bucket, Key: key }), { expiresIn: expires });
};
