import {
  SendMessageBatchCommand,
  SendMessageBatchCommandOutput,
  SendMessageBatchRequestEntry,
} from '@aws-sdk/client-sqs';
import { sqs } from '.';
import { chunkArray } from '../../util/array/chunk-array';

const MAX_MESSAGE_PER_BATCH = 10;

export const sendMessages = async <T>(
  messages: Array<T>,
  queueUrl: string,
  DelaySeconds?: number
): Promise<Array<SendMessageBatchCommandOutput>> => {
  const messagesChucked = chunkArray(messages, MAX_MESSAGE_PER_BATCH);
  return Promise.all(
    messagesChucked.map((messageChucked) => sendMessagesBatch(messageChucked, queueUrl, DelaySeconds))
  );
};

const sendMessagesBatch = async <T>(
  messages: Array<T>,
  queueUrl: string,
  DelaySeconds?: number
): Promise<SendMessageBatchCommandOutput> => {
  const entries: SendMessageBatchRequestEntry[] = messages.map((message, index) => {
    return {
      Id: String(index),
      MessageBody: JSON.stringify(message),
      DelaySeconds,
    };
  });

  return sqs.send(
    new SendMessageBatchCommand({
      QueueUrl: queueUrl,
      Entries: entries,
    })
  );
};
