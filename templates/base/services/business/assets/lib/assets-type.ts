import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { Asset, AssetKeyGeneratorParams } from '../entities/asset';

export type AssetType = 'asset' | 'privateAsset' | 'rawAvatar' | 'avatar';

export const assetsTypes: Record<AssetType, Asset<AssetType>> = {
  asset: {
    rootPath: 'asset',
    isPublic: true,
    eventEmitterEnabled: false,
  },
  privateAsset: {
    rootPath: 'privateAsset',
    isPublic: false,
    eventEmitterEnabled: false,
  },
  rawAvatar: {
    rootPath: 'rawAvatar',
    isPublic: false,
    eventEmitterEnabled: true,
    presignedPutOptions: {
      maxSize: 1024 * 1024 * 5,
      allowedMediaType: ['image/jpeg'],
      keyGenerator: (p: AssetKeyGeneratorParams) => `${p.tenantId}/${p.sub}.${p.extension}`,
      keyDecoder: (key: string) => {
        const [payload, extension] = key.split('.');
        const [tenantId, sub] = payload.split('/');
        return { tenantId, sub, uuid: uuid(), mediaType: 'image/jpeg', extension };
      },
    },
    middleware: {
      resize: {
        resizeToPixels: 300,
        nextAssetType: 'avatar',
        removeOriginal: true,
        newKeyGenerator: (p: AssetKeyGeneratorParams) => `${p.tenantId}/${p.sub}/${p.uuid}.${p.extension}`,
      },
    },
  },
  avatar: {
    rootPath: 'avatar',
    isPublic: true,
    eventEmitterEnabled: true,
  },
};
