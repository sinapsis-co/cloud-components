import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';
import { uuid } from '@sinapsis-co/cc-sdk/lib/uuid';

import { UserInviteTemplate } from '@sinapsis-co/cc-services/notifications/templates/user-invite';
import { notificationEvent } from '@sinapsis-co/cc-services/support/notifications/catalog';

import { PlatformError } from '@sinapsis-co/cc-sdk/error';
import { CustomError } from '@sinapsis-co/cc-services/config/error-catalog';
import { identityApi } from '../../catalog';
import { compositeEmail } from '../../repository/composite-email';
import { repoEmail } from '../../repository/repo-email';
import { repoInvite } from '../../repository/repo-invite';

export const handler = apiHandler(async (_, req) => {
  const { tenantId, companyName } = req.claims;
  const inviteId = uuid();

  const invite = repoInvite.entitySerialized(
    { tenantId, id: inviteId },
    { email: req.body.email, companyName: companyName, role: 'member' }
  );
  const email = repoEmail.entitySerialized({ email: req.body.email }, { email: req.body.email, tenantId });
  await compositeEmail
    .transactWrite([
      { entity: invite },
      {
        entity: email,
        params: { ConditionExpression: 'attribute_not_exists(PK)' },
      },
    ])
    .catch((e) => {
      if (e instanceof PlatformError) {
        const detail = JSON.parse(e.message);
        if (e.errorCode === 'ERROR_CONDITIONAL_CHECK_FAILED' && detail[1]) {
          throw new CustomError({ code: 'ERROR_IDENTITY_USER_EXISTS' });
        }
      }
    });

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

  return repoInvite.entityDeserialize(invite);
}, identityApi.inviteCreate.definition);
