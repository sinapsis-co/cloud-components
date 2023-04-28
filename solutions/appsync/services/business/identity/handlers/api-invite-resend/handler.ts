import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';

import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';
import { identityApi } from 'services/business/identity/catalog';
import { notificationEvent } from 'services/support/notifications/catalog';
import { UserInviteTemplate } from 'templates/user-invite';
import { inviteRepository } from '../../repository/repo-invite';

export const handler = apiHandler<identityApi.inviteResend.Interface>(async (_, req) => {
  const { tenantId } = req.claims;
  const { id } = req.pathParams;
  const invite = await inviteRepository.getItem({ tenantId, id });

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
        inviteCode: `${tenantId}#${invite.inviteId}`,
      },
    },
  });

  return invite;
}, identityApi.inviteResend.config);
