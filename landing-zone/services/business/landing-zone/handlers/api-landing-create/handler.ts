import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { uuid } from '@sinapsis-co/cc-sdk/lib/uuid';

import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';
import { landingApi, landingEvent } from '../../catalog';
import { repoLanding } from '../../repository/repo-landing';

export const handler = apiHandler(async (_, req) => {
  const { name, linkedLandingZone, credentials } = req.body;
  const landing = await repoLanding.createItem(
    { id: uuid() },
    { name, linkedLandingZone, status: 'Pending', role: '' }
  );
  await dispatchEvent(landingEvent.created.eventConfig, {
    landing,
    credentials,
  });
  return landing;
}, landingApi.create.definition);
