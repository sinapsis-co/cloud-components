import { eventHandler } from '@sinapsis-co/cc-sdk/handler/event/event-handler';

import { identityEvent } from '../../catalog';
import { inviteRepository } from '../../repository/repo-invite';

export const handler = eventHandler<identityEvent.inviteDeleted.Event>(async (event) => {
  const { tenantId, id } = event.detail;

  await inviteRepository.deleteItem({ tenantId, id });
});
