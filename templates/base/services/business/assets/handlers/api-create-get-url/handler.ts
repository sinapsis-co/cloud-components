import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { createGetPresignedUrl } from '@sinapsis-co/cc-platform-v2/integrations/bucket/presigned';
import { assetsTypes } from 'services/business/assets/lib/assets-type';
import { assetApi } from '../../catalog';

export const handler = apiHandler<assetApi.createGetUrl.Interface>(async (event, request) => {
  const { assetType, key } = request.body;

  // HINT: You can validate access based on your claims

  const selected = assetsTypes[assetType];
  if (!selected || selected.isPublic) throw new ApiError('InvalidAssetType', 400);

  const url = await createGetPresignedUrl(process.env.PRIVATE_BUCKET!, key, selected.presignedGetExpiration || 3600);

  return { url };
}, assetApi.createGetUrl.config);
