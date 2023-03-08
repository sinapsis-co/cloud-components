import { NotificationEmailAttachment } from '@sinapsis-co/cc-platform-v2/catalog/notifications';
import { deliverEmail, DeliverEmailParams } from '@sinapsis-co/cc-platform-v2/integrations/ses';
import { getAttachment } from './get-attachment';

export const sendEmail = async (
  addressFrom: string,
  addressTo: string,
  body: string,
  subject: string,
  attachments?: NotificationEmailAttachment[]
): Promise<void> => {
  const payload: DeliverEmailParams = {
    from: addressFrom,
    to: addressTo,
    subject,
    html: body,
  };

  if (attachments) {
    payload.attachments = await Promise.all(attachments.map((a) => getAttachment(a, process.env.ATTACHMENT_BUCKET!)));
  }

  await deliverEmail(payload);
};
