import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { createPutPresignedUrl } from '@sinapsis-co/cc-platform-v2/integrations/bucket/index';
import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { assetsTypes } from 'services/business/assets/lib/assets-type';
import { AssetKeyGeneratorParams } from 'services/business/assets/entities/asset';
import { assetApi } from '../../catalog';

export const handler = apiHandler<assetApi.createPutUrl.Interface>(async (event, request) => {
  const { tenantId, sub } = request.claims;
  const { assetType, mediaType, extension } = request.body;

  const selected = assetsTypes[assetType];
  if (!selected || !selected.presignedPutOptions) throw new ApiError('InvalidAssetType', 400);
  if (
    selected.presignedPutOptions.allowedMediaType &&
    selected.presignedPutOptions.allowedMediaType.length > 0 &&
    !selected.presignedPutOptions.allowedMediaType.some((e) => e === mediaType)
  ) {
    throw new ApiError('InvalidMediaType', 400);
  }
  const keyParams: AssetKeyGeneratorParams = {
    tenantId,
    sub,
    mediaType,
    extension,
    uuid: uuid(),
  };
  const key = `${selected.rootPath}/${selected.presignedPutOptions.keyGenerator(keyParams)}`;

  const assetUrl = selected.isPublic ? `${process.env.MEDIA_URL!}/${key}` : undefined;

  const presignedPost = createPutPresignedUrl({
    Bucket: selected.isPublic ? process.env.PUBLIC_BUCKET! : process.env.PRIVATE_BUCKET!,
    Key: key,
    ContentType: mediaType,
    ...(selected.presignedPutOptions.maxSize
      ? { ContentLengthRange: { min: 0, max: selected.presignedPutOptions.maxSize } }
      : {}),
  });

  return { presignedPost, assetUrl };
}, assetApi.createPutUrl.config);
