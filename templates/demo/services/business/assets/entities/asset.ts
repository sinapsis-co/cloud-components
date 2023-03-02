import { AssetType } from '../lib/assets-type';

export type Asset<T extends AssetType = AssetType> = {
  rootPath: T;
  isPublic: boolean;
  presignedGetExpiration?: number;
  presignedPutOptions?: {
    maxSize?: number;
    allowedMediaType?: string[];
    keyGenerator: (params: AssetKeyGeneratorParams) => string;
    keyDecoder: (key: string) => AssetKeyGeneratorParams;
  };
  eventEmitterEnabled: boolean;
  middleware?: {
    resize?: ResizeMiddleware;
  };
};

export type ResizeMiddleware = {
  resizeToPixels: number;
  nextAssetType: AssetType;
  removeOriginal: boolean;
  newKeyGenerator: (params: AssetKeyGeneratorParams) => string;
};

// HINT: It's depends of your specific use case, add or delete whatever you want.
export type AssetKeyGeneratorParams = {
  tenantId: string;
  sub: string;
  mediaType: string;
  extension: string;
  uuid: string;
};
