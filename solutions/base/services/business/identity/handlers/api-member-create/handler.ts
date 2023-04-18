import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';
import { uuid } from '@sinapsis-co/cc-sdk/lib/uuid';
import { identityApi } from 'services/business/identity/catalog';
import { pendingRepository } from 'services/business/identity/repository/pending-repository';
import { CustomError } from '../../../../../config/error-catalog';
import { UserInviteTemplate } from '../../../../../notifications/templates/user-invite';
import { notificationEvent } from '../../../../support/notifications/catalog';
import { identityRepository } from '../../repository/identity-repository';

export const handler = apiHandler<identityApi.memberCreate.Interface>(async (_, req) => {
  const { tenantId, companyName } = req.claims;
  const inviteId = uuid();

  // We need to run the query because the email is not the primary key
  const emailCheck = await identityRepository.listIndex(
    'email',
    { limit: 50 },
    {
      ExpressionAttributeNames: { '#email': 'email' },
      ExpressionAttributeValues: { ':email': req.body.email },
      KeyConditionExpression: '#email = :email',
    }
  );

  if (emailCheck.items.length > 0) throw new CustomError({ code: 'ERROR_IDENTITY_USER_EXISTS' });

  const user = pendingRepository.createItem(
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
