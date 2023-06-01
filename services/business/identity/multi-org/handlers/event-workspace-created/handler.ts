import { eventHandler } from '@sinapsis-co/cc-sdk/handler/event/event-handler';

import { identityEvent } from '../../catalog';
import { listAllOrgUser } from '../../platform/list-all';
import { repoOrgWorkspaceUser } from '../../repository/repo-org-workspace-user';
import { viewTransact } from '../../repository/views';

export const handler = eventHandler<identityEvent.workspaceCreated.Event>(async (event) => {
  const { orgId, workspaceId } = event.detail;

  const orgUser = await listAllOrgUser(orgId);
  const orgWorkspaceUsers = orgUser
    .filter((u) => u.role !== 'guest')
    .map((w) => ({
      entity: repoOrgWorkspaceUser.entitySerialize({ orgId, workspaceId, userId: w.userId }, { role: w.role }),
    }));

  await viewTransact.transactWrite({
    putItems: orgWorkspaceUsers,
  });
});
