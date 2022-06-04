import mustache from 'mustache';
import { minify } from 'html-minifier-terser';
import { S3 } from 'aws-sdk';
import { NotificationTemplate } from '../../catalog/notifications';
const s3 = new S3();

export const renderEmailTemplate = async <Template extends NotificationTemplate = NotificationTemplate>(
  bucketName: string,
  attributes: {
    templateName: Template['templateName'];
    payload: Template['payload'];
  }
): Promise<{ subject: string; body: string }> => {
  const [subjectTemplate, bodyTemplate] = await Promise.all([
    fetchTemplate(bucketName, 'email', attributes.templateName, 'subject', 'txt'),
    fetchTemplate(bucketName, 'email', attributes.templateName, 'body', 'html'),
  ]);

  const subject = mustache.render(subjectTemplate, attributes.payload);
  const body = await minify(mustache.render(bodyTemplate, attributes.payload));

  return { subject, body };
};

const fetchTemplate = async (
  bucket: string,
  via: 'email' | 'sms',
  templateName: string,
  fragment: string,
  extension: string
): Promise<string> => {
  const params: S3.GetObjectRequest = {
    Bucket: bucket,
    Key: `${templateName}/${via}/${fragment}.${extension}`,
  };
  const response = await s3.getObject(params).promise();
  if (!response.Body) throw new Error(`MISSING_TEMPLATE ${templateName}`);
  return response.Body.toString();
};
