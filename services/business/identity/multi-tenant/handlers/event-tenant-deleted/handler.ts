import { eventHandler } from '@sinapsis-co/cc-sdk/handler/event/event-handler';
import { dispatchEventBatch } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';

import { identityEvent } from '../../catalog';
import { listAllInvites, listAllUsers } from '../../platform/list-all';

export const handler = eventHandler<identityEvent.tenantDeleted.Event>(async (event) => {
  const { tenantId } = event.detail;
  const [users, invites] = await Promise.all([listAllUsers(tenantId), listAllInvites(tenantId)]);

  await Promise.all([
    dispatchEventBatch(identityEvent.memberDisabled.eventConfig, users),
    dispatchEventBatch(identityEvent.inviteDeleted.eventConfig, invites),
  ]);
});
