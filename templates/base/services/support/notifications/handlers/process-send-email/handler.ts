import { NotificationMessage } from '@sinapsis-co/cc-platform-v2/catalog/notifications/index';
import { queueBatchHandler } from '@sinapsis-co/cc-platform-v2/handler/queue/queue-batch-handler';
import { bucketGetObject } from '@sinapsis-co/cc-platform-v2/integrations/bucket';
import { deliverEmail, DeliverEmailParams } from '@sinapsis-co/cc-platform-v2/integrations/notifications';
import { renderEmailTemplate } from '@sinapsis-co/cc-platform-v2/integrations/notifications/render-template';
import { Readable } from 'stream';

export const handler = queueBatchHandler<NotificationMessage>(async (event, record, payload) => {
  const { template, addressTo, attachments } = payload;

  const { subject, body } = await renderEmailTemplate(process.env.TEMPLATES_BUCKET!, {
    templateName: template.templateName,
    payload: template.payload,
  });

  const deliverEmailParams: DeliverEmailParams = {
    from: process.env.EMAIL_FROM!,
    to: addressTo,
    subject,
    html: body,
  };

  if (attachments) {
    deliverEmailParams.attachments = await Promise.all(
      attachments.map(async (a) => {
        const response = await bucketGetObject({ Bucket: process.env.ATTACHMENT_BUCKET!, Key: a.key });
        if (!response.Body) throw new Error(`MISSING_ATTACHMENT ${a}`);
        return { filename: a.filename, content: response.Body as Readable };
      })
    );
  }

  await deliverEmail(deliverEmailParams);
});
