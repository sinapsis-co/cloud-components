import { bucketGetObject } from '@sinapsis-co/cc-sdk/integration/store/bucket/object';
import { CustomFault } from 'solutions/rest/config/error-catalog';

const recipeMemo: Record<string, string> = {};

export const getRecipe = async (path: string, RECIPE_BUCKET_NAME: string): Promise<string> => {
  if (!recipeMemo.path) {
    const response = await bucketGetObject({
      Key: `_next/serverless/${path}`,
      Bucket: RECIPE_BUCKET_NAME,
    });
    if (!response.Body) throw new CustomFault({ code: 'FAULT_SSR_MISSING_RECIPE' });
    recipeMemo.path = response.Body.toString();
  }
  return recipeMemo.path;
};
