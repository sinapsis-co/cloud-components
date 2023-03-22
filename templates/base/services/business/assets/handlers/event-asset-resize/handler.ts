import { eventHandler } from '@sinapsis-co/cc-platform/handler/event/event-handler';
import { bucketStreamGetObject, bucketStreamUpload } from '@sinapsis-co/cc-platform/integrations/bucket/object';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import sharp from 'sharp';
import { Readable } from 'stream';
import { assetEvent } from '../../catalog';
import { Asset } from '../../entities/asset';
import { assetsTypes } from '../../lib/assets-type';

const streamToSharp = ({ width, height }) => sharp().resize(width, height);

export const handler = eventHandler<assetEvent.assetToResize.Event>(async (event) => {
  const { bucketName, assetType, key, meta, resize, nextPartialKey } = event.detail;
  const { resizeToPixels, nextAssetType } = resize;

  const selected: Asset = assetsTypes[nextAssetType];
  const destinationBucket = selected.isPublic ? process.env.PUBLIC_BUCKET! : process.env.PRIVATE_BUCKET!;
  const originalKey = `${assetType}/${key}`;
  const destKey = `${selected.rootPath}/${nextPartialKey}`;

  // Pipe Input: Read from bucket
  const { ContentType, Body } = await bucketStreamGetObject({ Bucket: bucketName, Key: originalKey });
  // Pipe Middleware: Resize
  const resizeStream = streamToSharp({ width: resizeToPixels, height: resizeToPixels });
  // Pipe Output: Write in bucket
  if (Body && Body instanceof Readable) {
    await bucketStreamUpload(Body, resizeStream, {
      Bucket: destinationBucket,
      Key: destKey,
      ContentType,
    });
  } else throw new Error('Invalid input object');

  const promise = [
    dispatchEvent<assetEvent.assetUploaded.Event>(
      assetEvent.assetUploaded.eventConfig,
      {
        assetType: nextAssetType,
        bucketName: destinationBucket,
        key: destKey,
        meta,
      },
      { tenantId: meta.tenantId }
    ),
  ];

  if (resize.removeOriginal)
    promise.push(
      dispatchEvent<assetEvent.assetToRemove.Event>(
        assetEvent.assetToRemove.eventConfig,
        {
          assetType,
          key: originalKey,
        },
        { tenantId: meta.tenantId }
      )
    );

  await Promise.all(promise);
});
