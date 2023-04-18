import { RegExpManifest, RegExpManifestEntry } from '../../entities/next-serverless';

export const routeMatcher = (manifest: RegExpManifest, path: string): RegExpManifestEntry | undefined => {
  const containsParams = (path: string) => path.includes('[');
  const key = Object.keys(manifest)
    .sort((a, b) => {
      const dataA = manifest[a];
      const dataB = manifest[b];
      if (containsParams(dataA.path) && !containsParams(dataB.path)) return 1;
      if (!containsParams(dataA.path) && containsParams(dataB.path)) return -1;
      return dataA.path.localeCompare(dataB.path);
    })
    .find((k) => manifest[k].rx.test(path));

  if (key) return manifest[key];
};
