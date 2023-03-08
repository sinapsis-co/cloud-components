import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { bucketGetObject, bucketHeadObject, s3, Upload } from '@sinapsis-co/cc-platform-v2/integrations/bucket';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import sharp from 'sharp';
import stream, { Readable } from 'stream';
import { assetEvent } from '../../catalog';
import { Asset } from '../../entities/asset';
import { assetsTypes } from '../../lib/assets-type';

const readStreamFromS3 = async ({ bucketName, key }): Promise<stream.Readable> => {
  const bucket = await bucketGetObject({ Bucket: bucketName, Key: key });
  if (!bucket.Body) throw new Error('Empty bucket');
  return bucket.Body as Readable;
};
const streamToSharp = ({ width, height }) => sharp().resize(width, height);
const writeStreamToS3 = ({ bucketName, key, ContentType }) => {
  const pass = new stream.PassThrough();
  return {
    writeStream: pass,
    uploadFinished: new Upload({ client: s3, params: { Body: pass, Bucket: bucketName, Key: key, ContentType } }),
  };
};

export const handler = eventHandler<assetEvent.assetToResize.Event>(async (event) => {
  const { bucketName, assetType, key, meta, resize, nextPartialKey } = event.detail;
  const { resizeToPixels, nextAssetType } = resize;

  const selected: Asset = assetsTypes[nextAssetType];
  const destinationBucket = selected.isPublic ? process.env.PUBLIC_BUCKET! : process.env.PRIVATE_BUCKET!;
  const originalKey = `${assetType}/${key}`;
  const destKey = `${selected.rootPath}/${nextPartialKey}`;

  const { ContentType } = await bucketHeadObject({ Bucket: bucketName, Key: originalKey });
  const readStream = readStreamFromS3({ bucketName, key: originalKey });
  const resizeStream = streamToSharp({ width: resizeToPixels, height: resizeToPixels });
  const { writeStream, uploadFinished } = writeStreamToS3({ bucketName: destinationBucket, key: destKey, ContentType });
  (await readStream).pipe(resizeStream).pipe(writeStream);
  await uploadFinished.done();

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
