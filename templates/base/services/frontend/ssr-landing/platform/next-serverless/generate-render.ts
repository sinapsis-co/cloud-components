import { bucketPutObject } from '@sinapsis-co/cc-platform/integrations/bucket';
import requireFromString from 'require-from-string';
import serverlessHttp from 'serverless-http';
import { getEnvVars } from './get-env-vars';
import { getRecipe } from './get-recipe';

export const generateRenderer = async (
  uri: string,
  querystring: string,
  handler: string,
  DISTRO_BUCKET_NAME: string,
  RECIPE_BUCKET_NAME: string,
  NEXT_ENV_KEY: string,
  CF_CACHE_MAX_AGE: string
): Promise<void> => {
  await getEnvVars(NEXT_ENV_KEY, RECIPE_BUCKET_NAME);
  const rendererRecipe = await getRecipe(handler, RECIPE_BUCKET_NAME);
  const renderer = requireFromString(rendererRecipe, uri).render;
  const response = await serverlessHttp(renderer)(
    {
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
    },
    {}
  );

  await bucketPutObject({
    Bucket: DISTRO_BUCKET_NAME,
    Key: querystring,
    Body: (response as any).body,
    ContentType: 'text/html',
    CacheControl: `max-age=${CF_CACHE_MAX_AGE}`,
  });
};
