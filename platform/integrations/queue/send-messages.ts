import SQS from 'aws-sdk/clients/sqs';
import { chunkArray } from '../../util/array/chunk-array';

const sqs = new SQS();
const MAX_MESSAGE_PER_BATCH = 10;

export const sendMessages = async <T>(
  messages: Array<T>,
  queueUrl: string,
  DelaySeconds?: number
): Promise<Array<SQS.SendMessageBatchResult>> => {
  const messagesChucked = chunkArray(messages, MAX_MESSAGE_PER_BATCH);
  return Promise.all(
    messagesChucked.map((messageChucked) => sendMessagesBatch(messageChucked, queueUrl, DelaySeconds))
  );
};

const sendMessagesBatch = async <T>(
  messages: Array<T>,
  queueUrl: string,
  DelaySeconds?: number
): Promise<SQS.SendMessageBatchResult> => {
  const entries: SQS.SendMessageBatchRequestEntryList = messages.map((message, index) => {
    return {
      Id: String(index),
      MessageBody: JSON.stringify(message),
      DelaySeconds,
    };
  });

  const params: SQS.SendMessageBatchRequest = {
    QueueUrl: queueUrl,
    Entries: entries,
  };

  return sqs.sendMessageBatch(params).promise();
};
