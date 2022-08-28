import S3 from 'aws-sdk/clients/s3';
const s3 = new S3();

export const getEnvVars = async (NEXT_ENV_KEY: string, RECIPE_BUCKET_NAME: string): Promise<void> => {
  if (!process.env.ENV_VARS_LOADED) {
    const response = await s3
      .getObject({
        Key: NEXT_ENV_KEY,
        Bucket: RECIPE_BUCKET_NAME,
      })
      .promise();

    if (!response.Body) return;
    const rawEnvs = response.Body.toString();
    rawEnvs.split('\n').forEach((envVar) => {
      const splitted = envVar.split('=');
      process.env[splitted[0]] = splitted[1];
    });
    process.env.ENV_VARS_LOADED = 'true';
  }
};
