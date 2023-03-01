import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { S3 } from 'aws-sdk';
import sharp from 'sharp';
import stream from 'stream';
import { assetEvent } from '../../catalog';
import { Asset } from '../../entities/asset';
import { assetsTypes } from '../../lib/assets-type';

const s3 = new S3();

const readStreamFromS3 = ({ bucketName, key }) => s3.getObject({ Bucket: bucketName, Key: key }).createReadStream();
const streamToSharp = ({ width, height }) => sharp().resize(width, height);
const writeStreamToS3 = ({ bucketName, key, ContentType }) => {
  const pass = new stream.PassThrough();
  return {
    writeStream: pass,
    uploadFinished: s3.upload({ Body: pass, Bucket: bucketName, Key: key, ContentType }).promise(),
  };
};

export const handler = eventHandler<assetEvent.assetToResize.Event>(async (event) => {
  const { bucketName, assetType, key, meta, resize, nextPartialKey } = event.detail;
  const { resizeToPixels, nextAssetType } = resize;

  const selected: Asset = assetsTypes[nextAssetType];
  const destinationBucket = selected.isPublic ? process.env.PUBLIC_BUCKET! : process.env.PRIVATE_BUCKET!;
  const originalKey = `${assetType}/${key}`;
  const destKey = `${selected.rootPath}/${nextPartialKey}`;

  const { ContentType } = await s3.headObject({ Bucket: bucketName, Key: originalKey }).promise();
  const readStream = readStreamFromS3({ bucketName, key: originalKey });
  const resizeStream = streamToSharp({ width: resizeToPixels, height: resizeToPixels });
  const { writeStream, uploadFinished } = writeStreamToS3({ bucketName: destinationBucket, key: destKey, ContentType });
  readStream.pipe(resizeStream).pipe(writeStream);
  await uploadFinished;

  const promise = [
    dispatchEvent<assetEvent.assetUploaded.Event>(assetEvent.assetUploaded.eventConfig, {
      assetType: nextAssetType,
      bucketName: destinationBucket,
      key: destKey,
      meta,
    }),
  ];

  if (resize.removeOriginal)
    promise.push(
      dispatchEvent<assetEvent.assetToRemove.Event>(assetEvent.assetToRemove.eventConfig, {
        assetType,
        key: originalKey,
      })
    );

  await Promise.all(promise);
});
