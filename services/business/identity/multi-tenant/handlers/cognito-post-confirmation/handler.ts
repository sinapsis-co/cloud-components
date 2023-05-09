import { updateCognitoUser } from '@sinapsis-co/cc-sdk/integration/cognito';
import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';
import { uuid } from '@sinapsis-co/cc-sdk/lib/uuid';
import { PostConfirmationTriggerHandler } from 'aws-lambda';

import { CustomError } from '@sinapsis-co/cc-services/config/error-catalog';
import { WelcomeTemplate } from '@sinapsis-co/cc-services/notifications/templates/welcome';
import { notificationEvent } from '@sinapsis-co/cc-services/support/notifications/catalog';

import { identityEvent } from '../../catalog';
import { UserCognito } from '../../entities/user-cognito';
import { cognitoToProfileMapper, cognitoUpdateCustomMapper } from '../../platform/cognito-mapper';
import { repoInvite } from '../../repository/repo-invite';
import { repoUser } from '../../repository/repo-user';

export const handler: PostConfirmationTriggerHandler = async (event) => {
  const { userAttributes } = event.request;

  // Triggers only in ConfirmSignUp
  if (event.triggerSource !== 'PostConfirmation_ConfirmSignUp') return event;

  // HINT: UserCognito can use values from user input or created/overwritten by code.
  const userCognito: UserCognito = {
    standard: {
      sub: userAttributes['sub'],
      email: userAttributes['email'],
      given_name: userAttributes['given_name'],
      family_name: userAttributes['family_name'],
    },
    custom: {
      tenantId: uuid(),
      role: 'owner',
      companyName: userAttributes['custom:companyName'],
    },
  };

  // Check if the user has an invitation
  const [inviteTenantId, inviteId] = userAttributes['custom:companyName'].split('#');
  const userWithInvite = await repoInvite.deleteItem({ tenantId: inviteTenantId, id: inviteId }).catch((e) => {
    if (e instanceof CustomError && e.errorCode === 'ERROR_ITEM_NOT_FOUND') return;
    throw e;
  });
  if (userWithInvite) {
    userCognito.custom.tenantId = userWithInvite.tenantId;
    userCognito.custom.companyName = userWithInvite.companyName;
    userCognito.custom.role = 'member';
  }

  const { tenantId, id, ...att } = cognitoToProfileMapper(userCognito);

  // HINT: If you don't need to send the welcome email, it's just delete it from the array
  await Promise.all([
    ...[
      userWithInvite
        ? dispatchEvent(identityEvent.memberCreated.eventConfig, { tenantId, id, ...att })
        : dispatchEvent(identityEvent.tenantCreated.eventConfig, {
            tenantId,
            companyName: att.companyName,
            ownerEmail: att.email,
          }),
    ],
    repoUser.createItem({ tenantId, id }, { ...att, ...(userWithInvite ? {} : { tenantOwner: true }) }),
    updateCognitoUser(event.userName, cognitoUpdateCustomMapper(userCognito.custom), event.userPoolId),
    dispatchEvent<notificationEvent.dispatch.Event<WelcomeTemplate>>(notificationEvent.dispatch.eventConfig, {
      via: 'email',
      addressTo: userCognito.standard.email,
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
    }),
  ]);

  return event;
};
