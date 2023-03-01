import { NotificationEmailAttachment } from '@sinapsis-co/cc-platform-v2/catalog/notifications';
import { S3 } from 'aws-sdk';

const s3 = new S3();

export const getAttachment = async (
  attachment: NotificationEmailAttachment,
  bucketName: string
): Promise<{
  filename: string;
  content: Buffer;
}> => {
  const response = await s3.getObject({ Bucket: bucketName, Key: attachment.key }).promise();

  if (!response.Body) throw new Error(`MISSING_ASSET ${attachment.key}`);

  return {
    filename: attachment.filename,
    content: response.Body as Buffer,
  };
};
