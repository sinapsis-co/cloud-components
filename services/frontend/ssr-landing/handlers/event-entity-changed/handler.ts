/* eslint-disable no-console */
import { eventHandler } from '@sinapsis-co/cc-sdk/handler/event/event-handler';
import { sendMessages } from '@sinapsis-co/cc-sdk/integration/queue';

import { ssrLandingMessage } from '../../catalog';
import { RenderPage, RenderRequest } from '../../entities/render-page';
import { renderPageTypes } from '../../lib/render-page';

export const handler = eventHandler<RenderRequest>(async (event) => {
  const [entityName, operation] = event['detail-type'].split('.').slice(1);
  if (!entityName || !operation) throw new Error('Invalid entity');
  const renderPageSelected: RenderPage = renderPageTypes[entityName];

  if (!renderPageSelected) {
    console.log({ type: 'ERROR_NO_RENDER_PAGE', renderPageSelected });
    return;
  }
  const uri = `/${entityName}/${renderPageSelected.uriGenerationFn(event.detail)}`;

  sendMessages<ssrLandingMessage.renderGenerator.Message>([{ uri, querystring: '' }], process.env.QUEUE!);
});
