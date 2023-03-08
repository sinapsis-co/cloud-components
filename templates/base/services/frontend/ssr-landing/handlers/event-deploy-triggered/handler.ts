/* eslint-disable no-console */
import { eventHandler } from '@sinapsis-co/cc-platform-v2/handler/event/event-handler';
import { bucketListObjects } from '@sinapsis-co/cc-platform-v2/integrations/bucket';
import { sendMessages } from '@sinapsis-co/cc-platform-v2/integrations/queue/send-messages';
import { ssrLandingMessage } from '../../catalog';
import { renderPageTypes } from '../../lib/render-page';

export const handler = eventHandler(async () => {
  const uris = await Promise.all(
    Object.values(renderPageTypes).map(async (pageType) => {
      return getKeys(pageType.entity);
    })
  );

  //
  await sendMessages<ssrLandingMessage.renderGenerator.Message>(
    uris.flat().map((uri) => ({ ...uri, querystring: '' })),
    process.env.DEST_QUEUE!
  );
});

const getKeys = async (Prefix: string, ContinuationToken?: string): Promise<{ uri: string }[]> => {
  const uris: { uri: string }[] = [];
  const { NextContinuationToken, Contents } = await bucketListObjects({
    Bucket: process.env.DISTRO_BUCKET_NAME!,
    Prefix,
    ContinuationToken,
  });
  if (!Contents) return [];
  uris.push(...Contents.map((c) => ({ uri: c.Key || '' })).filter((c) => !!c));
  if (NextContinuationToken) uris.push(...(await getKeys(Prefix, NextContinuationToken)));
  return uris;
};
