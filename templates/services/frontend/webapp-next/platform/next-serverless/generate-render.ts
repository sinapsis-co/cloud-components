import serverlessHttp from 'serverless-http';
import requireFromString from 'require-from-string';
import S3 from 'aws-sdk/clients/s3';
import { getEnvVars } from './get-env-vars';
import { getRecipe } from './get-recipe';

const s3 = new S3();

export const generateRenderer = async (
  uri: string,
  handler: string,
  DISTRO_BUCKET_NAME: string,
  RECIPE_BUCKET_NAME: string,
  NEXT_ENV_KEY: string,
  CF_CACHE_MAX_AGE: string
): Promise<void> => {
  await getEnvVars(NEXT_ENV_KEY, RECIPE_BUCKET_NAME);
  const rendererRecipe = await getRecipe(handler, RECIPE_BUCKET_NAME);
  const renderer = requireFromString(rendererRecipe, uri).render;
  const response = await serverlessHttp(renderer)({
    body: '',
    httpMethod: 'GET',
    path: uri,
    pathParameters: { username: uri.split('/')[1] },
    queryStringParameters: {},
    multiValueHeaders: {},
    isBase64Encoded: false,
    multiValueQueryStringParameters: {},
    stageVariables: {},
    requestContext: {} as any,
    resource: '',
  }, {});

  await s3
    .putObject({
      Bucket: DISTRO_BUCKET_NAME,
      Key: uri,
      Body: (response as any).body,
      ContentType: 'text/html',
      CacheControl: `max-age=${CF_CACHE_MAX_AGE}`,
    })
    .promise();
};
