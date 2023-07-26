import {
  DeleteMessageCommand,
  DeleteMessageCommandOutput,
  SendMessageBatchCommand,
  SendMessageBatchCommandOutput,
  SendMessageBatchRequestEntry,
  SQSClient,
} from '@aws-sdk/client-sqs';
import { PlatformFault } from 'error';
import { traceableFunction, Tracing } from 'tracing';
import { chunkArray } from 'util/chunk-array';

export const sqs = Tracing.captureIntegration(new SQSClient({}));

const MAX_MESSAGE_PER_BATCH = 10;

export type SendMessagesParams = {
  queueUrl?: string;
} & Pick<SendMessageBatchRequestEntry, 'DelaySeconds' | 'MessageDeduplicationId' | 'MessageGroupId'>;

export const sendMessages = async <T>(
  messages: Array<T>,
  params?: SendMessagesParams
): Promise<Array<SendMessageBatchCommandOutput>> => {
  if (!params?.queueUrl || !process.env.DEST_QUEUE)
    throw new PlatformFault({ code: 'FAULT_SQS_SEND_MESSAGES', detail: 'Queue URL not found' });
  const queueUrl = params?.queueUrl || process.env.DEST_QUEUE!;
  const cmd = async () => {
    const messagesChucked = chunkArray(messages, MAX_MESSAGE_PER_BATCH);
    return Promise.all(
      messagesChucked.map((messageChucked) => sendMessagesBatch(messageChucked, { ...params, queueUrl }))
    );
  };
  return traceableFunction('SendMessages', 'FAULT_SQS_SEND_MESSAGES', queueUrl, cmd);
};

export const deleteMessage = async (receiptHandle: string, queueUrl: string): Promise<DeleteMessageCommandOutput> => {
  const cmd = async () => {
    return sqs.send(new DeleteMessageCommand({ QueueUrl: queueUrl, ReceiptHandle: receiptHandle }));
  };
  return traceableFunction('DeleteMessage', 'FAULT_SQS_DELETE_MESSAGE', receiptHandle, cmd);
};

// Private use only
const sendMessagesBatch = async <T>(
  messages: Array<T>,
  params?: SendMessagesParams
): Promise<SendMessageBatchCommandOutput> => {
  const entries: SendMessageBatchRequestEntry[] = messages.map((message, index) => {
    return { Id: String(index), MessageBody: JSON.stringify(message), ...params };
  });
  return sqs.send(new SendMessageBatchCommand({ QueueUrl: params?.queueUrl, Entries: entries })).catch((err) => {
    throw new PlatformFault({ code: 'FAULT_SQS_SEND_MESSAGES', detail: err.message });
  });
};
