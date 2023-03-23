import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { createPutPresignedUrl } from '@sinapsis-co/cc-platform/integrations/bucket/presigned';
import { uuid } from '@sinapsis-co/cc-platform/lib/uuid';
import { AssetKeyGeneratorParams } from 'services/business/assets/entities/asset';
import { assetsTypes } from 'services/business/assets/lib/assets-type';
import { CustomError } from '../../../../../config/error-catalog';
import { assetApi } from '../../catalog';

export const handler = apiHandler<assetApi.createPutUrl.Interface>(async (event, request) => {
  const { tenantId, sub } = request.claims;
  const { assetType, mediaType, extension } = request.body;

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
  };
  const key = `${selected.rootPath}/${selected.presignedPutOptions.keyGenerator(keyParams)}`;

  const assetUrl = selected.isPublic ? `${process.env.MEDIA_URL!}/${key}` : undefined;

  const presignedPost = await createPutPresignedUrl({
    Bucket: selected.isPublic ? process.env.PUBLIC_BUCKET! : process.env.PRIVATE_BUCKET!,
    Key: key,
    ContentType: mediaType,
    ...(selected.presignedPutOptions.maxSize
      ? { ContentLengthRange: { min: 0, max: selected.presignedPutOptions.maxSize } }
      : {}),
  });

  return { presignedPost, assetUrl };
}, assetApi.createPutUrl.config);
