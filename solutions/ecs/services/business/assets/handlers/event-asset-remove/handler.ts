import { eventHandler } from '@sinapsis-co/cc-sdk/handler/event/event-handler';
import { bucketDeleteObject } from '@sinapsis-co/cc-sdk/integration/store/bucket/object';
import { CustomError } from '../../../../../config/error-catalog';
import { assetEvent } from '../../catalog';
import { Asset } from '../../entities/asset';
import { assetsTypes } from '../../lib/assets-type';

export const handler = eventHandler<assetEvent.assetToRemove.Event>(async (event) => {
  const { assetType, key } = event.detail;

  const selected: Asset = assetsTypes[assetType];
  if (!selected) throw new CustomError({ code: 'ERROR_ASSET_INVALID_TYPE' });
  const destinationBucket = selected.isPublic ? process.env.PUBLIC_BUCKET! : process.env.PRIVATE_BUCKET!;

  await bucketDeleteObject({ Bucket: destinationBucket, Key: key });
});
