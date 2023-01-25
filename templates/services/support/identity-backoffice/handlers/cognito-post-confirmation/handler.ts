import { updateCognitoUser } from '@sinapsis-co/cc-platform-v2/integrations/cognito/admin-ops/update-user-att';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { PostConfirmationTriggerHandler } from 'aws-lambda';
import { UserCognito } from 'services/business/identity/entities/user-cognito';
import { cognitoToProfileMapper, cognitoUpdateCustomMapper } from 'services/business/identity/platform/cognito-mapper';
import { userProfileRepository } from 'services/business/identity/repository/user-profile-repository';

import { WelcomeTemplate } from 'notifications/templates/welcome';
import { notificationEvent } from 'services/support/notifications/catalog';

export const handler: PostConfirmationTriggerHandler = async (event) => {
  const { userAttributes } = event.request;

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
  const { tenantId, id, ...att } = cognitoToProfileMapper(userCognito);

  // HINT: If you don't need to send the welcome email, it's just delete it from the array
  await Promise.all([
    userProfileRepository.createItem({ tenantId, id }, att),
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
        },
      },
    }),
  ]);

  return event;
};
