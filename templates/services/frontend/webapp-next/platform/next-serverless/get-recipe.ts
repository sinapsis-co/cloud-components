import S3 from 'aws-sdk/clients/s3';
import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';

const s3 = new S3();

const recipeMemo: Record<string, string> = {};

export const getRecipe = async (path: string, RECIPE_BUCKET_NAME: string): Promise<string> => {
  console.log('GET RECIPE', path);
  if (!recipeMemo.path) {
    const response = await s3
      .getObject({
        Key: `_next/serverless/${path}`,
        Bucket: RECIPE_BUCKET_NAME,
      })
      .promise();
    if (!response.Body) throw new ApiError('Missing manifest', 500);
    recipeMemo.path = response.Body.toString();
  }
  return recipeMemo.path;
};
