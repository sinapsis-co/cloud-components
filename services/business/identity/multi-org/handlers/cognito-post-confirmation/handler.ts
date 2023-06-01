import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';
import { PostConfirmationTriggerHandler } from 'aws-lambda';

import { CustomError } from '@sinapsis-co/cc-services/config/error-catalog';

import { identityEvent } from '../../catalog';
import { UserCognito } from '../../entities/user-cognito';
import { cognitoToProfileMapper } from '../../platform/cognito-mapper';
import { repoInvite } from '../../repository/repo-invite';

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
    custom: {},
  };
  const userInput = cognitoToProfileMapper(userCognito);

  // Check if the user has an invitation
  const orgNameOrInviteId = userAttributes['custom:orgName'];
  const userWithInvite = await repoInvite.deleteItem({ inviteId: orgNameOrInviteId }).catch((e) => {
    if (e instanceof CustomError && e.errorCode === 'ERROR_ITEM_NOT_FOUND') return;
    throw e;
  });

  if (userWithInvite) {
    if (userWithInvite.workspaceId) {
      await dispatchEvent(identityEvent.guestSignUp.eventConfig, {
        userInput,
        orgId: userWithInvite.orgId,
        workspaceId: userWithInvite.workspaceId,
      });
    } else {
      await dispatchEvent(identityEvent.memberSignUp.eventConfig, { userInput, orgId: userWithInvite.orgId });
    }
  } else {
    await dispatchEvent(identityEvent.orgSignUp.eventConfig, { userInput, orgName: orgNameOrInviteId });
  }

  // const { userId, ...att } = cognitoToProfileMapper(userCognito);

  // const userEntity = repoUser.entitySerialized(
  //   { userId },
  //   { ...att, ...(userWithInvite ? {} : { tenantOwner: true }) }
  // );
  // const emailEntity = repoEmail.entitySerialized(
  //   { email: userCognito.standard.email },
  //   { email: userCognito.standard.email }
  // );

  // await Promise.all([
  //   // ...[
  //   //   userWithInvite
  //   //     ? dispatchEvent(identityEvent.memberCreated.eventConfig, { userId, ...att })
  //   //     : dispatchEvent(identityEvent.tenantCreated.eventConfig, {
  //   //         companyName: att.companyName,
  //   //         ownerEmail: att.email,
  //   //       }),
  //   // ],
  //   viewEmail.transactWrite({ putItems: [{ entity: userEntity }, { entity: emailEntity }] }),
  //   dispatchEvent<notificationEvent.dispatch.Event<WelcomeTemplate>>(notificationEvent.dispatch.eventConfig, {
  //     via: 'email',
  //     addressTo: userCognito.standard.email,
  //     template: {
  //       templateName: 'welcome',
  //       payload: {
  //         currentYear: new Date().getFullYear().toString(),
  //         siteUrl: process.env.WEBAPP_URL!,
  //         baseAssetUrl: process.env.MEDIA_URL!,
  //         projectName: process.env.PROJECT_NAME!,
  //         language: 'en',
  //         defaultLanguage: 'en',
  //       },
  //     },
  //   }),
  // ]);

  return event;
};
