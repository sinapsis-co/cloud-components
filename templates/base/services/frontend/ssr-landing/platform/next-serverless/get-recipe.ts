import { ApiError } from '@sinapsis-co/cc-platform/handler/api/api-error';
import { bucketGetObject } from '@sinapsis-co/cc-platform/integrations/bucket/object';

const recipeMemo: Record<string, string> = {};

export const getRecipe = async (path: string, RECIPE_BUCKET_NAME: string): Promise<string> => {
  if (!recipeMemo.path) {
    const response = await bucketGetObject({
      Key: `_next/serverless/${path}`,
      Bucket: RECIPE_BUCKET_NAME,
    });
    if (!response.Body) throw new ApiError('Missing manifest', 500);
    recipeMemo.path = response.Body.toString();
  }
  return recipeMemo.path;
};
