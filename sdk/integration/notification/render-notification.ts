import { NotificationTemplate } from 'catalog/notification';
import { PlatformFault } from 'error';
import { minify } from 'html-minifier-terser';
import mustache from 'mustache';
import { bucketGetObject } from '../store/bucket/object';

export const renderEmailNotification = async <Template extends NotificationTemplate = NotificationTemplate>(
  bucketName: string,
  template: Template,
  lang: string,
  defaultLang: string
): Promise<{ subject: string; body: string }> => {
  const [subjectTemplate, bodyTemplate, translationFile] = await Promise.all([
    fetchTemplateFile(bucketName, template.topic, 'email', template.templateName, 'subject.txt'),
    fetchTemplateFile(bucketName, template.topic, 'email', template.templateName, 'body.html'),
    fetchTranslationFile(bucketName, template.topic, template.templateName),
  ]);

  const translationMap = JSON.parse(translationFile);
  let chosenLang = lang;

  if (!translationMap[chosenLang]) {
    // eslint-disable-next-line no-console
    console.log({ type: 'MISSING_LANG', template: template.templateName, lang: chosenLang });
    chosenLang = defaultLang;
    if (!translationMap[chosenLang]) {
      throw new PlatformFault({
        code: 'FAULT_NOT_MISSING_TRANSLATION_LANG',
        meta: { chosenLang, templateName: template.templateName },
      });
    }
  }
  const translation = JSON.parse(mustache.render(translationFile, template.payload))[chosenLang];
  const subject = mustache.render(subjectTemplate, { ...translation, ...template.payload });
  const body = await minify(mustache.render(bodyTemplate, { ...translation, ...template.payload }));

  return { subject, body };
};

const fetchTemplateFile = async (
  bucket: string,
  topic: string,
  channel: 'email' | 'sms',
  templateName: string,
  file: string
): Promise<string> => {
  const { Body } = await bucketGetObject({
    Bucket: bucket,
    Key: `${topic}/${templateName}/${channel}/${file}`,
  });
  if (!Body) throw new PlatformFault({ code: 'FAULT_NOT_MISSING_TEMPLATE_FILE', detail: templateName });
  return Body;
};

const fetchTranslationFile = async (bucket: string, topic: string, templateName: string): Promise<string> => {
  const { Body } = await bucketGetObject({
    Bucket: bucket,
    Key: `${topic}/${templateName}/translation.json`,
  });
  if (!Body) throw new PlatformFault({ code: 'FAULT_NOT_MISSING_TRANSLATION_FILE', detail: templateName });
  return Body;
};
