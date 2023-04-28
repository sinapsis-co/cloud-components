export type ManifestEntryArr = [path: string, handler: string, rx: RegExp];

export type RegExpManifestEntry = {
  rx: RegExp;
  path: string;
  handler: string;
};

export type RegExpManifest = Record<string, RegExpManifestEntry>;

export type PlainRoutesManifest = Record<string, string>;
