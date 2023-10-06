import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { createPutPresignedUrl } from '@sinapsis-co/cc-sdk/integration/store/bucket/presigned';
import { uuid } from '@sinapsis-co/cc-sdk/lib/uuid';

import { CustomError } from '@sinapsis-co/cc-services/config/error-catalog';

import { assetApi } from '../../catalog';
import { AssetKeyGeneratorParams } from '../../entities/asset';
import { assetsTypes } from '../../lib/assets-type';

export const handler = apiHandler<assetApi.createPutUrl.Interface>(async (event, request) => {
  const { tenantId, sub } = request.claims;
  const { assetType, mediaType, extension, entity, metadata } = request.body;

  const selected = assetsTypes[assetType];
  if (!selected || !selected.presignedPutOptions) throw new CustomError({ code: 'ERROR_ASSET_INVALID_TYPE' });
  if (
    selected.presignedPutOptions.allowedMediaType &&
    selected.presignedPutOptions.allowedMediaType.length > 0 &&
    !selected.presignedPutOptions.allowedMediaType.some((e) => e === mediaType)
  ) {
    throw new CustomError({ code: 'ERROR_ASSET_INVALID_MEDIA_TYPE' });
  }
  const keyParams: AssetKeyGeneratorParams = {
    tenantId,
    sub,
    mediaType,
    extension,
    uuid: uuid(),
    entity,
  };
  const key = `${selected.rootPath}/${selected.presignedPutOptions.keyGenerator(keyParams)}`;

  const assetUrl = selected.isPublic ? `${process.env.MEDIA_URL!}/${key}` : undefined;

  const presignedPost = await createPutPresignedUrl(
    {
      Bucket: selected.isPublic ? process.env.PUBLIC_BUCKET! : process.env.PRIVATE_BUCKET!,
      Key: key,
      ContentType: mediaType,
      ...(selected.presignedPutOptions.maxSize
        ? { ContentLengthRange: { min: 0, max: selected.presignedPutOptions.maxSize } }
        : {}),
    },
    Object.keys(metadata || {}).length ? { ...metadata } : {}
  );

  return { presignedPost, assetUrl };
}, assetApi.createPutUrl.config);
