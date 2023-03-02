import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import S3 from 'aws-sdk/clients/s3';
import { assetEvent } from '../../catalog';
import { Asset } from '../../entities/asset';
import { assetsTypes } from '../../lib/assets-type';
const s3 = new S3();

export const handler = eventHandler<assetEvent.assetToRemove.Event>(async (event) => {
  const { assetType, key } = event.detail;

  const selected: Asset = assetsTypes[assetType];
  if (!selected) throw new ApiError('InvalidAssetType', 400);
  const destinationBucket = selected.isPublic ? process.env.PUBLIC_BUCKET! : process.env.PRIVATE_BUCKET!;

  await s3.deleteObject({ Bucket: destinationBucket, Key: key }).promise();
});
