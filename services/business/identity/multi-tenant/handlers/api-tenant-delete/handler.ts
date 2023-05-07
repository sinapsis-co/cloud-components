import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';

import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';
import { identityApi, identityEvent } from '../../catalog';

export const handler = apiHandler(async (_, req) => {
  const { tenantId } = req.claims;

  await dispatchEvent(identityEvent.tenantDeleted.eventConfig, { tenantId, deleteReason: req.body.deleteReason });

  return { deleteInProgress: true };
}, identityApi.tenantDelete.definition);
