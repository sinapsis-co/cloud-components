import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { assetEvent } from '../../catalog';
import { Event as RawAsset } from '../../catalog/event/raw-asset-uploaded';
import { Asset } from '../../entities/asset';
import { assetsTypes, AssetType } from '../../lib/assets-type';

export const handler = eventHandler<RawAsset>(async (event) => {
  const { bucket, object } = event.detail;

  const [type, ...key] = object.key.split('/');
  const partialKey = key.join('/');

  const assetType: AssetType = type as AssetType;
  const selected: Asset = assetsTypes[assetType];

  if (!selected.presignedPutOptions) throw new Error('Missing presignedPutOptions');
  const meta = selected.presignedPutOptions.keyDecoder(partialKey);

  if (selected.middleware) {
    if (selected.middleware.resize) {
      await dispatchEvent<assetEvent.assetToResize.Event>(
        assetEvent.assetToResize.eventConfig,
        {
          assetType,
          bucketName: bucket.name,
          key: partialKey,
          meta,
          resize: selected.middleware.resize,
          nextPartialKey: selected.middleware.resize.newKeyGenerator(meta),
        },
        process.env.CUSTOM_BUS
      );
    }
  } else {
    await dispatchEvent<assetEvent.assetUploaded.Event>(
      assetEvent.assetUploaded.eventConfig,
      { assetType, bucketName: bucket.name, key: object.key, meta },
      process.env.CUSTOM_BUS
    );
  }
});
