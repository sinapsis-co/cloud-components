import { getCognitoTemplateName } from '@sinapsis-co/cc-sdk/integration/notification/cognito-template';
import { renderEmailTemplate } from '@sinapsis-co/cc-sdk/integration/notification/render-template';
import { CustomMessageTriggerHandler } from 'aws-lambda';

import { ConfirmationCodeTemplate } from '@sinapsis-co/cc-services/notifications/templates/confirmation-code';

export const handler: CustomMessageTriggerHandler = async (event) => {
  const email = await renderEmailTemplate<ConfirmationCodeTemplate>(process.env.TEMPLATES_BUCKET!, {
    templateName: getCognitoTemplateName<ConfirmationCodeTemplate>(event.triggerSource.toString()),
    payload: {
      email: encodeURIComponent(event.userName),
      code: event.request.codeParameter,
      currentYear: new Date().getFullYear().toString(),
      siteUrl: process.env.WEBAPP_URL!,
      baseAssetUrl: process.env.MEDIA_URL!,
      projectName: process.env.PROJECT_NAME!,
    },
  });

  if (email) {
    event.response.emailMessage = email.body;
    event.response.emailSubject = email.subject;
  }

  return event;
};
