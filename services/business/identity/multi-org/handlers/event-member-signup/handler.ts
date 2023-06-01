import { eventHandler } from '@sinapsis-co/cc-sdk/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';
import { uuid } from '@sinapsis-co/cc-sdk/lib/uuid';
import { WelcomeTemplate } from '@sinapsis-co/cc-services/notifications/templates/welcome';
import { notificationEvent } from '@sinapsis-co/cc-services/support/notifications/catalog';

import { identityEvent } from '../../catalog';
import { listAllOrgWorkspace } from '../../platform/list-all';
import { repoOrgUser } from '../../repository/repo-org-user';
import { repoOrgWorkspaceUser } from '../../repository/repo-org-workspace-user';
import { repoUser } from '../../repository/repo-user';
import { viewTransact } from '../../repository/views';

export const handler = eventHandler<identityEvent.memberSignUp.Event>(async (event) => {
  const {
    userInput: { userId, ...userAtt },
    orgId,
  } = event.detail;

  const orgWorkspace = await listAllOrgWorkspace(orgId);

  const user = repoUser.entitySerialize({ userId: userId }, userAtt);
  const orgUser = repoOrgUser.entitySerialize({ orgId: uuid(), userId }, { role: 'owner' });

  const orgWorkspaceUsers = orgWorkspace.map((w) => ({
    entity: repoOrgWorkspaceUser.entitySerialize(
      { orgId: w.orgId, workspaceId: w.workspaceId, userId },
      { role: w.role }
    ),
  }));

  await viewTransact.transactWrite({
    putItems: [{ entity: user }, { entity: orgUser }, ...orgWorkspaceUsers],
  });

  await dispatchEvent<notificationEvent.dispatch.Event<WelcomeTemplate>>(notificationEvent.dispatch.eventConfig, {
    via: 'email',
    addressTo: userAtt.email,
    template: {
      templateName: 'welcome',
      payload: {
        currentYear: new Date().getFullYear().toString(),
        siteUrl: process.env.WEBAPP_URL!,
        baseAssetUrl: process.env.MEDIA_URL!,
        projectName: process.env.PROJECT_NAME!,
        language: 'en',
        defaultLanguage: 'en',
      },
    },
  });
});
