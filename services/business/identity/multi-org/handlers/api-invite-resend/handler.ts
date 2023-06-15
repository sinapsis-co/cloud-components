import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';

import { UserInviteTemplate } from '@sinapsis-co/cc-services/notifications/templates/user-invite';
import { notificationEvent } from '@sinapsis-co/cc-services/support/notifications/catalog';

import { identityApi } from '../../catalog';
import { repoInvite } from '../../repository/repo-invite';

export const handler = apiHandler(async (_, req) => {
  const { inviteId } = req.pathParams;
  const invite = await repoInvite.getItem({ inviteId });

  await dispatchEvent<notificationEvent.dispatch.Event<UserInviteTemplate>>(notificationEvent.dispatch.eventConfig, {
    via: 'email',
    addressTo: invite.email,
    template: {
      templateName: 'user-invite',
      payload: {
        currentYear: new Date().getFullYear().toString(),
        siteUrl: process.env.WEBAPP_URL!,
        baseAssetUrl: process.env.MEDIA_URL!,
        projectName: process.env.PROJECT_NAME!,
        inviteCode: invite.inviteId,
      },
    },
  });

  return invite;
}, identityApi.inviteResend.definition);
