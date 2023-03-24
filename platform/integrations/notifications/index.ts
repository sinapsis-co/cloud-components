import { SendEmailCommand, SESv2Client } from '@aws-sdk/client-sesv2';
import { createTransport } from 'nodemailer';
import { Readable } from 'stream';
import { Tracing } from '../../tracing';

export const ses: SESv2Client = Tracing.captureIntegration(new SESv2Client({}) as any);

export type Attachment = {
  filename: string;
  content: Readable;
};

export type DeliverEmailParams = {
  from: string;
  to: string;
  subject: string;
  html: string;
  attachments?: Attachment[];
};

class SendRawEmailCommand extends SendEmailCommand {
  constructor(params) {
    const input = {
      Content: { Raw: { Data: params.RawMessage.Data } },
      FromEmailAddress: params.Source,
      Destination: { ToAddresses: params.Destinations },
    };
    super(input);
  }
}

export const deliverEmail = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: DeliverEmailParams,
  tracingMeta?: TracingMeta
): Promise<void> => {
  const cmd = async () => {
    const transporter = createTransport({ SES: { ses: ses, aws: { SendRawEmailCommand: SendRawEmailCommand } } });
    await transporter.sendMail(params);
  };
  return Tracing.traceableOp('SendEmail', 'FAULT_NOT_DELIVER_EMAIL', params.to, cmd, tracingMeta);
};
