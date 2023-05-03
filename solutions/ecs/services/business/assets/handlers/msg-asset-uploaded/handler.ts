import { queueBatchHandler } from '@sinapsis-co/cc-sdk/handler/queue/queue-batch-handler';
import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';
import { S3Event } from 'aws-lambda';
import { assetEvent } from '../../catalog';
import { Asset } from '../../entities/asset';
import { assetsTypes, AssetType } from '../../lib/assets-type';

export const handler = queueBatchHandler<S3Event>(async (event, record, payload) => {
  await Promise.allSettled(
    payload.Records.map(async (r) => {
      const bucket = r.s3.bucket;
      const object = r.s3.object;

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
            { tenantId: meta.tenantId }
          );
        }
      } else {
        await dispatchEvent<assetEvent.assetUploaded.Event>(
          assetEvent.assetUploaded.eventConfig,
          { assetType, bucketName: bucket.name, key: object.key, meta },
          { tenantId: meta.tenantId }
        );
      }
    })
  );
});
