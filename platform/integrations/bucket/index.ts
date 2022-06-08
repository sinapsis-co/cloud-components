import S3 from 'aws-sdk/clients/s3';
const s3 = new S3();

const DEFAULT_MAX_LENGTH = 1024 * 1024 * 5; // 5 MB

type PresignedPostParams = {
  Bucket: string;
  Key: string;
  ContentType: string;
  Expires?: number;
  ContentLengthRange?: { min: number; max: number };
};

export const createPutPresignedUrl = (
  params: PresignedPostParams,
  metadata: Record<string, string>
): S3.PresignedPost => {
  const { Key, ContentType, ContentLengthRange, ...rest } = params;

  return s3.createPresignedPost({
    Expires: 3600,
    ...rest,
    Fields: {
      key: Key,
      'Content-Type': ContentType,
      ...metadata,
    },
    Conditions: [['content-length-range', ContentLengthRange?.min ?? 0, ContentLengthRange?.max ?? DEFAULT_MAX_LENGTH]],
  });
};

export const createGetPresignedUrl = (bucket: string, key: string, expires = 3600): string => {
  return s3.getSignedUrl('getObject', {
    Bucket: bucket,
    Key: key,
    Expires: expires,
  });
};
