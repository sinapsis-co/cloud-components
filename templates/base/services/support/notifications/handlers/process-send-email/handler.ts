import { queueBatchHandler } from '@sinapsis-co/cc-platform-v2/handler/queue/queue-batch-handler';
import { sendEmail } from 'services/support/notifications/platform/send-email';
import { NotificationMessage } from '@sinapsis-co/cc-platform-v2/catalog/notifications/index';
import { renderEmailTemplate } from '@sinapsis-co/cc-platform-v2/integrations/notifications/render-template';

export const handler = queueBatchHandler<NotificationMessage>(async (event, record, payload) => {
  const { template, addressTo, attachments } = payload;

  const { subject, body } = await renderEmailTemplate(process.env.TEMPLATES_BUCKET!, {
    templateName: template.templateName,
    payload: template.payload,
  });

  await sendEmail(process.env.EMAIL_FROM!, addressTo, body, subject, attachments);
});
