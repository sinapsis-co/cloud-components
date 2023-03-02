import { CustomMessageTriggerHandler } from 'aws-lambda';
import { renderEmailTemplate } from '@sinapsis-co/cc-platform-v2/integrations/notifications/render-template';
import { getCognitoTemplateName } from '@sinapsis-co/cc-platform-v2/integrations/cognito/notifications/template';
import { ConfirmationCodeTemplate } from 'notifications/templates/confirmation-code';

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