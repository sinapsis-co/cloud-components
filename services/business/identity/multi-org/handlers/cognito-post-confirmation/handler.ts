import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';
import { PostConfirmationTriggerHandler } from 'aws-lambda';

import { CustomError } from '@sinapsis-co/cc-services/config/error-catalog';
import { WelcomeTemplate } from '@sinapsis-co/cc-services/notifications/templates/welcome';
import { notificationEvent } from '@sinapsis-co/cc-services/support/notifications/catalog';

import { UserCognito } from '../../entities/user-cognito';
import { cognitoToProfileMapper } from '../../platform/cognito-mapper';
import { repoEmail } from '../../repository/repo-email';
import { repoInvite } from '../../repository/repo-invite';
import { repoUser } from '../../repository/repo-user';
import { viewEmail } from '../../repository/views';

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
      orgName: userAttributes['custom:orgName'],
    },
  };

  // Check if the user has an invitation
  const [inviteTenantId, inviteId] = userAttributes['custom:orgName'].split('#');
  const userWithInvite = await repoInvite.deleteItem({ inviteId: inviteId }).catch((e) => {
    if (e instanceof CustomError && e.errorCode === 'ERROR_ITEM_NOT_FOUND') return;
    throw e;
  });
  if (userWithInvite) {
    userCognito.custom.orgName = userWithInvite.orgName;
  }

  const { userId, ...att } = cognitoToProfileMapper(userCognito);

  const userEntity = repoUser.entitySerialized(
    { userId },
    { ...att, ...(userWithInvite ? {} : { tenantOwner: true }) }
  );
  const emailEntity = repoEmail.entitySerialized(
    { email: userCognito.standard.email },
    {
      email: userCognito.standard.email,
    }
  );

  // HINT: If you don't need to send the welcome email, it's just delete it from the array
  await Promise.all([
    // ...[
    //   userWithInvite
    //     ? dispatchEvent(identityEvent.memberCreated.eventConfig, { userId, ...att })
    //     : dispatchEvent(identityEvent.tenantCreated.eventConfig, {
    //         companyName: att.companyName,
    //         ownerEmail: att.email,
    //       }),
    // ],
    viewEmail.transactWrite({ putItems: [{ entity: userEntity }, { entity: emailEntity }] }),
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
