import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { bucketDeleteObject } from '@sinapsis-co/cc-platform-v2/integrations/bucket';
import { assetEvent } from '../../catalog';
import { Asset } from '../../entities/asset';
import { assetsTypes } from '../../lib/assets-type';

export const handler = eventHandler<assetEvent.assetToRemove.Event>(async (event) => {
  const { assetType, key } = event.detail;

  const selected: Asset = assetsTypes[assetType];
  if (!selected) throw new ApiError('InvalidAssetType', 400);
  const destinationBucket = selected.isPublic ? process.env.PUBLIC_BUCKET! : process.env.PRIVATE_BUCKET!;

  await bucketDeleteObject({ Bucket: destinationBucket, Key: key });
});
