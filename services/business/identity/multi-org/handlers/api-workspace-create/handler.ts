import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';
import { uuid } from '@sinapsis-co/cc-sdk/lib/uuid';

import { identityApi, identityEvent } from '../../catalog';
import { repoOrgWorkspace } from '../../repository/repo-org-workspace';
import { repoOrgWorkspaceUser } from '../../repository/repo-org-workspace-user';
import { repoWorkspace } from '../../repository/repo-workspace';
import { viewTransact } from '../../repository/views';

export const handler = apiHandler(async (_, req) => {
  const { name } = req.body;
  const { orgId } = req.pathParams;
  const workspaceId = uuid();

  const workspace = repoWorkspace.entitySerialize({ workspaceId }, { name, orgOwnerId: orgId });
  const orgWorkspace = repoOrgWorkspace.entitySerialize({ orgId, workspaceId }, { role: 'owner' });
  const orgWorkspaceUser = repoOrgWorkspaceUser.entitySerialize(
    { orgId, workspaceId, userId: req.claims.sub },
    { role: 'owner' }
  );

  await viewTransact.transactWrite({
    putItems: [{ entity: workspace }, { entity: orgWorkspace }, { entity: orgWorkspaceUser }],
  });

  await dispatchEvent(identityEvent.workspaceCreated.eventConfig, { workspaceId, orgId });

  return workspace;
}, identityApi.workspaceCreate.definition);
