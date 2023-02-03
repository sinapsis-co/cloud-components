/* eslint-disable no-console */
import { generateRenderer } from './generate-render';
import { getManifest } from './get-manifest';
import { routeMatcher } from './route-matcher';

const RECIPE_BUCKET_NAME = process.env.RECIPE_BUCKET_NAME!;
const DISTRO_BUCKET_NAME = process.env.DISTRO_BUCKET_NAME!;
const NEXT_ENV_KEY = `_next/.env.${process.env.ENV_NAME}`;
const NEXT_MANIFEST_KEY = '_next/serverless/pages-manifest.json';
const CF_CACHE_MAX_AGE = '300';

export const nextServerlessRender = async (uri: string, querystring: string): Promise<void> => {
  const manifest = await getManifest(NEXT_MANIFEST_KEY, RECIPE_BUCKET_NAME);
  const match = routeMatcher(manifest, uri);
  if (!match) {
    console.log({ type: 'ERROR_NO_MATCH', uri });
    return;
  }
  await generateRenderer(uri, querystring, match.handler, DISTRO_BUCKET_NAME, RECIPE_BUCKET_NAME, NEXT_ENV_KEY, CF_CACHE_MAX_AGE);
};
