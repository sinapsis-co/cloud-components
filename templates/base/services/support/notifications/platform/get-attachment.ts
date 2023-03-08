import { NotificationEmailAttachment } from '@sinapsis-co/cc-platform-v2/catalog/notifications';
import { bucketGetObject } from '@sinapsis-co/cc-platform-v2/integrations/bucket';
import { Attachment } from '@sinapsis-co/cc-platform-v2/integrations/ses';

export const getAttachment = async (
  attachment: NotificationEmailAttachment,
  bucketName: string
): Promise<Attachment> => {
  const response = await bucketGetObject({ Bucket: bucketName, Key: attachment.key });

  if (!response.Body) throw new Error(`MISSING_ASSET ${attachment.key}`);

  return {
    filename: attachment.filename,
    content: response.Body as Buffer,
  };
};
