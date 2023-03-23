import {
  DeleteMessageCommand,
  SendMessageBatchCommand,
  SendMessageBatchCommandOutput,
  SendMessageBatchRequestEntry,
  SQSClient,
} from '@aws-sdk/client-sqs';
import { Tracing } from '../../tracing';
import { chunkArray } from '../../util/chunk-array';

export const sqs = Tracing.captureIntegration(new SQSClient({}));

const MAX_MESSAGE_PER_BATCH = 10;

export const sendMessages = async <T>(
  messages: Array<T>,
  queueUrl: string,
  DelaySeconds?: number
): Promise<Array<SendMessageBatchCommandOutput>> => {
  const sendMessagesBatch = async <T>(
    messages: Array<T>,
    queueUrl: string,
    DelaySeconds?: number
  ): Promise<SendMessageBatchCommandOutput> => {
    const entries: SendMessageBatchRequestEntry[] = messages.map((message, index) => {
      return { Id: String(index), MessageBody: JSON.stringify(message), DelaySeconds };
    });
    return sqs.send(new SendMessageBatchCommand({ QueueUrl: queueUrl, Entries: entries }));
  };
  const messagesChucked = chunkArray(messages, MAX_MESSAGE_PER_BATCH);
  return Promise.all(
    messagesChucked.map((messageChucked) => sendMessagesBatch(messageChucked, queueUrl, DelaySeconds))
  );
};

export const deleteMessage = async (receiptHandle: string, queueUrl: string): Promise<void> => {
  await sqs.send(
    new DeleteMessageCommand({
      QueueUrl: queueUrl,
      ReceiptHandle: receiptHandle,
    })
  );
};
