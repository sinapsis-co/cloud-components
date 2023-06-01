import { eventHandler } from '@sinapsis-co/cc-sdk/handler/event/event-handler';
import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';
import { uuid } from '@sinapsis-co/cc-sdk/lib/uuid';

import { WelcomeTemplate } from '@sinapsis-co/cc-services/notifications/templates/welcome';
import { notificationEvent } from '@sinapsis-co/cc-services/support/notifications/catalog';

import { identityEvent } from '../../catalog';
import { repoEmail } from '../../repository/repo-email';
import { repoOrg } from '../../repository/repo-org';
import { repoOrgUser } from '../../repository/repo-org-user';
import { repoUser } from '../../repository/repo-user';
import { viewTransact } from '../../repository/views';

export const handler = eventHandler<identityEvent.orgSignUp.Event>(async (event) => {
  const {
    userInput: { userId, ...userAtt },
    orgName,
  } = event.detail;

  const orgId = uuid();

  const user = repoUser.entitySerialize({ userId }, userAtt);
  const email = repoEmail.entitySerialize({ email: userAtt.email }, { userId });
  const org = repoOrg.entitySerialize({ orgId }, { name: orgName, ownerEmail: userAtt.email });
  const orgUser = repoOrgUser.entitySerialize({ orgId, userId }, { role: 'owner' });

  await viewTransact.transactWrite({
    putItems: [{ entity: user }, { entity: email }, { entity: org }, { entity: orgUser }],
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
