import SES from 'aws-sdk/clients/ses';
import AwsXRay from 'aws-xray-sdk-core';
import { createTransport } from 'nodemailer';

export const ses = AwsXRay.captureAWSClient(new SES());

export type Attachment = {
  filename: string;
  content: Buffer;
};

export type DeliverEmailParams = {
  from: string;
  to: string;
  subject: string;
  html: string;
  attachments?: Attachment[];
};

export const deliverEmail = async <TracingMeta extends Record<string, string> = Record<string, string>>(
  params: DeliverEmailParams,
  tracingMeta?: TracingMeta
): Promise<void> => {
  return AwsXRay.captureAsyncFunc(`SendEmail: ${params.to}`, async (innerSubsegment) => {
    if (tracingMeta) Object.keys(tracingMeta).map((t) => innerSubsegment!.addAnnotation(t, tracingMeta[t]));
    const transporter = createTransport({ SES: ses });
    await transporter.sendMail(params);
    innerSubsegment?.close();
  });
};
