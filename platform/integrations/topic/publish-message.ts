import {
  PublishBatchCommand,
  PublishBatchCommandInput,
  PublishBatchCommandOutput,
  SNSClient,
} from '@aws-sdk/client-sns';
import AwsXRay from 'aws-xray-sdk-core';
import { chunkArray } from '../../util/chunk-array';

const sns = AwsXRay.captureAWSClient(new SNSClient({}));

const MAX_MESSAGE_PER_BATCH = 10;

export const publishMessages = async <T>(
  messages: Array<T>,
  queueUrl: string
): Promise<Array<PublishBatchCommandOutput>> => {
  const messagesChucked = chunkArray(messages, MAX_MESSAGE_PER_BATCH);
  return Promise.all(messagesChucked.map((messageChucked) => publishMessagesBatch(messageChucked, queueUrl)));
};

const publishMessagesBatch = async <T>(messages: Array<T>, topicArn: string): Promise<PublishBatchCommandOutput> => {
  const entries: PublishBatchCommandInput['PublishBatchRequestEntries'] = messages.map((message, index) => {
    return { Id: String(index), Message: JSON.stringify(message) };
  });
  return sns.send(new PublishBatchCommand({ TopicArn: topicArn, PublishBatchRequestEntries: entries }));
};
