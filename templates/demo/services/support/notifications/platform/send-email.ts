import { NotificationEmailAttachment } from '@sinapsis-co/cc-platform/catalog/notifications';
import { SES } from 'aws-sdk';
import { createTransport } from 'nodemailer';
import { getAttachment } from './get-attachment';

const ses = new SES();

export const sendEmail = async (
  addressFrom: string,
  addressTo: string,
  body: string,
  subject: string,
  attachments?: NotificationEmailAttachment[]
): Promise<void> => {
  const transporter = createTransport({ SES: ses });
  const payload = {
    from: addressFrom,
    to: addressTo,
    subject,
    html: body,
  };

  if (attachments) {
    payload['attachments'] = await Promise.all(
      attachments.map((a) => getAttachment(a, process.env.ATTACHMENT_BUCKET!))
    );
  }

  await transporter.sendMail({
    from: addressFrom,
    to: addressTo,
    subject,
    html: body,
    attachments,
  });
};
