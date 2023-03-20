import { NotificationMessage } from '@sinapsis-co/cc-platform/catalog/notifications/index';
import { queueBatchHandler } from '@sinapsis-co/cc-platform/handler/queue/queue-batch-handler';
import { renderEmailTemplate } from '@sinapsis-co/cc-platform/integrations/notifications/render-template';
import { sendEmail } from 'services/support/notifications/platform/send-email';

export const handler = queueBatchHandler<NotificationMessage>(async (event, record, payload) => {
  const { template, addressTo, attachments } = payload;

  const { subject, body } = await renderEmailTemplate(process.env.TEMPLATES_BUCKET!, {
    templateName: template.templateName,
    payload: template.payload,
  });

  await sendEmail(process.env.EMAIL_FROM!, addressTo, body, subject, attachments);
});
