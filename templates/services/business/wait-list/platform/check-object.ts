import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import S3 from 'aws-sdk/clients/s3';
const s3 = new S3();

export const checkObject = async (key: string): Promise<void> => {
  await s3
    .headObject({
      Key: key,
      Bucket: process.env.BUCKET_NAME!,
    })
    .promise()
    .catch((e) => {
      throw new ApiError('ObjectNotFound', 404, e.message);
    });
};
