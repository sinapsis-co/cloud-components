import { bucketGetObject } from '@sinapsis-co/cc-sdk/integration/store/bucket/object';

import { CustomFault } from 'solutions/rest/config/error-catalog';
import { ManifestEntryArr, PlainRoutesManifest, RegExpManifest } from '../../entities/next-serverless';

let manifestMemo: RegExpManifest;

export const getManifest = async (NEXT_MANIFEST_KEY: string, RECIPE_BUCKET_NAME: string): Promise<RegExpManifest> => {
  if (!manifestMemo) {
    const response = await bucketGetObject({
      Key: NEXT_MANIFEST_KEY,
      Bucket: RECIPE_BUCKET_NAME,
    });
    if (!response.Body) throw new CustomFault({ code: 'FAULT_SSR_MISSING_MANIFEST' });
    const manifest: PlainRoutesManifest = JSON.parse(response.Body.toString());
    manifestMemo = buildRegExpManifest(manifest);
  }
  return manifestMemo;
};

export const buildRegExpManifest = (manifest: PlainRoutesManifest): RegExpManifest => {
  return Object.keys(manifest)
    .map((path: string): ManifestEntryArr => [path, manifest[path], buildPathRegExp(path)])
    .reduce((memo, [path, handler, rx]: ManifestEntryArr): RegExpManifest => {
      return { ...memo, [handler]: { rx, path, handler } };
    }, {});
};

export const buildPathRegExp = (path: string): RegExp => {
  const cleanPath = path.replace(/\//g, '/');
  const paramsMapper = cleanPath.replace(/\[([^\]]+)]/g, '(?<$1>[^/]+)');
  return new RegExp(`^${paramsMapper}/?$`);
};
