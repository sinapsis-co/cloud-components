import S3 from 'aws-sdk/clients/s3';
const s3 = new S3();

export const createGetPresignedUrl = (bucket: string, key: string, expires = 3600): string => {
  return s3.getSignedUrl('getObject', {
    Bucket: bucket,
    Key: key,
    Expires: expires,
  });
};

export const createPutPresignedUrl = (
  bucket: string,
  key: string,
  contentType: string,
  expires = 3600
): S3.PresignedPost => {
  return s3.createPresignedPost({
    Bucket: bucket,
    Expires: expires,
    Fields: { key, 'Content-Type': contentType },
  });
};
