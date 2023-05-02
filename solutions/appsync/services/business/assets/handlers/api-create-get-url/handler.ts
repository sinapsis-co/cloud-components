import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { createGetPresignedUrl } from '@sinapsis-co/cc-sdk/integration/store/bucket/presigned';
import { CustomError } from '../../../../../config/error-catalog';
import { assetApi } from '../../catalog';
import { assetsTypes } from '../../lib/assets-type';

export const handler = apiHandler<assetApi.createGetUrl.Interface>(async (event, request) => {
  const { assetType, key } = request.body;

  // HINT: You can validate access based on your claims

  const selected = assetsTypes[assetType];
  if (!selected || selected.isPublic) throw new CustomError({ code: 'ERROR_ASSET_INVALID_TYPE' });

  const url = await createGetPresignedUrl(process.env.PRIVATE_BUCKET!, key, selected.presignedGetExpiration || 3600);

  return { url };
}, assetApi.createGetUrl.config);
