import { SendEmailCommand, SESv2Client } from '@aws-sdk/client-sesv2';
import AwsXRay from 'aws-xray-sdk-core';
import { createTransport } from 'nodemailer';
import { Readable } from 'stream';

export const ses: SESv2Client = AwsXRay.captureAWSv3Client(new SESv2Client({}) as any);

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
  return AwsXRay.captureAsyncFunc(`SendEmail: ${params.to}`, async (innerSubsegment) => {
    if (tracingMeta) Object.keys(tracingMeta).map((t) => innerSubsegment!.addAnnotation(t, tracingMeta[t]));
    const transporter = createTransport({ SES: { ses: ses, aws: { SendRawEmailCommand: SendRawEmailCommand } } });
    await transporter.sendMail(params);
    innerSubsegment?.close();
  });
};
