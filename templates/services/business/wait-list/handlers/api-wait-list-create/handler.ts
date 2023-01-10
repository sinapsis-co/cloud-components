import { ApiError } from '@sinapsis-co/cc-platform-v2/handler/api/api-error';
import { apiHandler } from '@sinapsis-co/cc-platform-v2/handler/api/api-handler';
import { dispatchEvent } from '@sinapsis-co/cc-platform-v2/integrations/event/dispatch-event';
import { uuid } from '@sinapsis-co/cc-platform-v2/lib/uuid';
import { WaitListTemplate } from 'notifications/templates/wait-list';
import { notificationEvent } from 'services/support/notifications/catalog';
import * as catalog from '../../catalog';
import { waitListRepository } from '../../repository';

export const handler = apiHandler<catalog.api.create.Interface>(async (_, request) => {
  const { email, givenName } = request.body;

  if (!validateEmail(email)) {
    throw new ApiError('INVALID_EMAIL', 400, 'The email address you provided is invalid. Please verify it!');
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

const validateEmail = (email: any) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
