import { bucketGetObject } from '@sinapsis-co/cc-platform-v2/integrations/bucket';

export const getEnvVars = async (NEXT_ENV_KEY: string, RECIPE_BUCKET_NAME: string): Promise<void> => {
  if (!process.env.ENV_VARS_LOADED) {
    const response = await bucketGetObject({
      Key: NEXT_ENV_KEY,
      Bucket: RECIPE_BUCKET_NAME,
    });

    if (!response.Body) return;
    const rawEnvs = response.Body.toString();
    rawEnvs.split('\n').forEach((envVar) => {
      const splitted = envVar.split('=');
      process.env[splitted[0]] = splitted[1];
    });
    process.env.ENV_VARS_LOADED = 'true';
  }
};
