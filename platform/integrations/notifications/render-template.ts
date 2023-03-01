import { S3 } from 'aws-sdk';
import { minify } from 'html-minifier-terser';
import mustache from 'mustache';
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

  let payload = attributes.payload;
  if (attributes.payload['language']) {
    const translation = await fetchTemplate(bucketName, 'email', attributes.templateName, 'body', 'json');
    const language = Object.keys(JSON.parse(translation)[attributes.payload['language']]).length
      ? attributes.payload['language']
      : attributes.payload['defaultLanguage'];
    payload = JSON.parse(mustache.render(translation, attributes.payload))[language];
  }

  const subject = mustache.render(subjectTemplate, { ...payload, ...attributes.payload });
  const body = await minify(mustache.render(bodyTemplate, { ...payload, ...attributes.payload }));

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
