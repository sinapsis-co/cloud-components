import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { WaitListTemplate } from 'notifications/templates/wait-list';
import { notificationEvent } from 'services/support/notifications/catalog';
import * as catalog from '../../catalog';
import { waitListRepository } from '../../repository';
import { getSecret } from '@sinapsis-co/cc-platform-v2/config/secret/get-secret';
import { googleReCaptcha as googleReCaptchaSecret } from '../../catalog/secret';
import { googleApiRequestValidate } from '../../platform/google-recaptcha';

export const handler = apiHandler<catalog.api.create.Interface>(async (_, request) => {
  const { email, givenName, googleReCaptcha } = request.body;

  const secrets = await getSecret<googleReCaptchaSecret.Secret>(googleReCaptchaSecret.secretConfig);

  const { success } = await googleApiRequestValidate(googleReCaptcha, secrets.API_SECRET);

  if (!success) {
    throw new ApiError('INVALID_RECAPTCHA', 400, 'The captcha is invalid');
  }

  const prelaunchUser = await waitListRepository
    .createItem(
      { email },
      { id: uuid(), givenName },
      {
        ConditionExpression: '#pk <> :pk',
        ExpressionAttributeValues: { ':pk': email },
        ExpressionAttributeNames: { '#pk': 'pk' },
      }
    )
    .catch((error) => {
      if (error.raw.message === 'ConditionalCheckFailedException') {
        throw new ApiError(
          'EMAIL_ALREADY_EXISTS',
          400,
          'Thank you very much for sending us your contact again. We will let you know as soon as we go live!'
        );
      }

      throw new ApiError('INTERNAL_SERVER_ERROR', 500, error.message);
    });

  await dispatchEvent<notificationEvent.dispatch.Event<WaitListTemplate>>(notificationEvent.dispatch.eventConfig, {
    via: 'email',
    addressTo: email,
    template: {
      templateName: 'wait-list',
      payload: {
        currentYear: new Date().getFullYear().toString(),
        siteUrl: process.env.WEBAPP_URL!,
        baseAssetUrl: process.env.MEDIA_URL!,
        projectName: process.env.PROJECT_NAME!,
      },
    },
  });
  return prelaunchUser;
}, catalog.api.create.config);

