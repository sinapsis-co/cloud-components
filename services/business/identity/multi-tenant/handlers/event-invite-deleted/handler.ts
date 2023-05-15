import { eventHandler } from '@sinapsis-co/cc-sdk/handler/event/event-handler';

import { identityEvent } from '../../catalog';
import { repoEmail } from '../../repository/repo-email';
import { repoInvite } from '../../repository/repo-invite';

export const handler = eventHandler<identityEvent.inviteDeleted.Event>(async (event) => {
  const { tenantId, inviteId } = event.detail;

  const user = await repoInvite.deleteItem({ tenantId, inviteId });
  await repoEmail.deleteItem({ email: user.email });
});
