/* eslint-disable no-console */
import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { sendMessages } from '@sinapsis-co/cc-platform-v2/integrations/queue/send-messages';
import { S3 } from 'aws-sdk';
import { ssrLandingMessage } from '../../catalog';
import { renderPageTypes } from '../../lib/render-page';
const s3 = new S3();

export const handler = eventHandler(async () => {
  const uris = await Promise.all(
    Object.values(renderPageTypes).map(async (pageType) => {
      return getKeys(pageType.entity);
    })
  );
  await sendMessages<ssrLandingMessage.renderGenerator.Message>(uris.flat(), process.env.DEST_QUEUE!);
});

const getKeys = async (Prefix: string, ContinuationToken?: string): Promise<{ uri: string }[]> => {
  const uris: { uri: string }[] = [];
  const { NextContinuationToken, Contents } = await s3
    .listObjectsV2({
      Bucket: process.env.DISTRO_BUCKET_NAME!,
      Prefix,
      ContinuationToken,
    })
    .promise();
  if (!Contents) return [];
  uris.push(...Contents.map((c) => ({ uri: c.Key || '' })).filter((c) => !!c));
  if (NextContinuationToken) uris.push(...(await getKeys(Prefix, NextContinuationToken)));
  return uris;
};
