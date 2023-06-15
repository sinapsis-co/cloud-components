import { PlatformError } from '@sinapsis-co/cc-sdk/error';
import { apiHandler } from '@sinapsis-co/cc-sdk/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-sdk/integration/event/dispatch-event';
import { uuid } from '@sinapsis-co/cc-sdk/lib/uuid';
import { CustomError } from '@sinapsis-co/cc-services/config/error-catalog';

import { UserInviteTemplate } from '@sinapsis-co/cc-services/notifications/templates/user-invite';
import { notificationEvent } from '@sinapsis-co/cc-services/support/notifications/catalog';

import { identityApi } from '../../catalog';
import { repoEmail } from '../../repository/repo-email';
import { repoInvite } from '../../repository/repo-invite';
import { viewEmail } from '../../repository/views';

export const handler = apiHandler(async (_, req) => {
  const { orgId } = req.pathParams;
  const inviteId = uuid();

  const invite = repoInvite.entitySerialize({ inviteId }, { email: req.body.email, orgId, role: 'member' });
  const email = repoEmail.entitySerialize({ email: req.body.email }, { userId: '' });

  await viewEmail
    .transactWrite({
      putItems: [
        { entity: invite },
        {
          entity: email,
          params: { ConditionExpression: 'attribute_not_exists(PK)' },
        },
      ],
    })
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
        inviteCode: inviteId,
      },
    },
  });

  return repoInvite.entityDeserialize(invite);
}, identityApi.inviteCreate.definition);
