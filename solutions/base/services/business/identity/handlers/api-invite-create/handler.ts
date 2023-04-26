import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';
import { uuid } from '@sinapsis-co/cc-sdk/lib/uuid';

import { CustomError } from 'config/error-catalog';
import { notificationEvent } from 'services/support/notifications/catalog';
import { UserInviteTemplate } from 'templates/user-invite';
import { identityApi } from '../../catalog';
import { inviteRepository } from '../../repository/repo-invite';
import { identityView } from '../../repository/view-identity';

export const handler = apiHandler<identityApi.inviteCreate.Interface>(async (_, req) => {
  const { tenantId, companyName } = req.claims;
  const inviteId = uuid();

  // We need to run the query because the email is not the primary key, and we use identityRepository because
  // we want to find coincides in both cases (users or invites)
  const emailCheck = await identityView.listIndex(
    'email',
    { limit: 50 },
    {
      ExpressionAttributeNames: { '#email': 'email' },
      ExpressionAttributeValues: { ':email': req.body.email },
      KeyConditionExpression: '#email = :email',
    }
  );

  if (emailCheck.items.length > 0) throw new CustomError({ code: 'ERROR_IDENTITY_USER_EXISTS' });

  const invite = await inviteRepository.createItem(
    { tenantId, id: inviteId },
    {
      inviteId,
      email: req.body.email,
      companyName: companyName,
      role: 'member',
    }
  );

  await dispatchEvent<notificationEvent.dispatch.Event<UserInviteTemplate>>(notificationEvent.dispatch.eventConfig, {
    via: 'email',
    addressTo: req.body.email,
    template: {
      templateName: 'user-invite',
      payload: {
        currentYear: new Date().getFullYear().toString(),
        siteUrl: process.env.WEBAPP_URL!,
        baseAssetUrl: process.env.MEDIA_URL!,
        projectName: process.env.PROJECT_NAME!,
        inviteCode: `${tenantId}#${inviteId}`,
      },
    },
  });

  return invite;
}, identityApi.inviteCreate.config);
