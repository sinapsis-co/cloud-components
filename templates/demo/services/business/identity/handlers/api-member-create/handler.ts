import { ApiError } from '@sinapsis-co/cc-platform/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform/integrations/event/dispatch-event';
import { uuid } from '@sinapsis-co/cc-platform/lib/uuid';
import { identityApi } from 'services/business/identity/catalog';
import { userProfileRepository } from 'services/business/identity/repository/user-profile-repository';
import { UserInviteTemplate } from '../../../../../notifications/templates/user-invite';
import { notificationEvent } from '../../../../support/notifications/catalog';

export const handler = apiHandler<identityApi.memberCreate.Interface>(async (_, req) => {
  const { tenantId, companyName } = req.claims;
  const inviteId = uuid();

  const emailCheck = await userProfileRepository.listItem(
    req.body.email,
    { limit: 50 },
    {
      IndexName: 'byEmail',
      ExpressionAttributeNames: { '#email': 'email' },
      ExpressionAttributeValues: { ':email': req.body.email },
      KeyConditionExpression: '#email = :email',
    }
  );

  if (emailCheck.items.length > 0) throw new ApiError('UserAlreadyExists');

  const user = userProfileRepository.createItem(
    { tenantId, id: inviteId },
    {
      isPending: true,
      inviteId,
      email: req.body.email,
      givenName: 'pending',
      familyName: 'pending',
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

  return user;
}, identityApi.memberCreate.config);
