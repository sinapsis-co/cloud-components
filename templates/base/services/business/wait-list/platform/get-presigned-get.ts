import S3 from 'aws-sdk/clients/s3';
const s3 = new S3();

export const createPresignedGet = (key: string): string => {
  return s3.getSignedUrl('getObject', {
    Key: key,
    Bucket: process.env.BUCKET_NAME!,
    Expires: 3600,
  });
};
