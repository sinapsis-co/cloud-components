import S3 from 'aws-sdk/clients/s3';
import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { ManifestEntryArr, PlainRoutesManifest, RegExpManifest } from '../../entities/next-serverless';

const s3 = new S3();

let manifestMemo: RegExpManifest;

export const getManifest = async (NEXT_MANIFEST_KEY: string, RECIPE_BUCKET_NAME: string): Promise<RegExpManifest> => {
  if (!manifestMemo) {
    const response = await s3
      .getObject({
        Key: NEXT_MANIFEST_KEY,
        Bucket: RECIPE_BUCKET_NAME,
      })
      .promise();
    if (!response.Body) throw new ApiError('Missing manifest', 500);
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