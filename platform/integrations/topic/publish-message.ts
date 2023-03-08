import SNS from 'aws-sdk/clients/sns';
import AwsXRay from 'aws-xray-sdk-core';
import { chunkArray } from '../../util/array/chunk-array';

const sns = AwsXRay.captureAWSClient(new SNS());

const MAX_MESSAGE_PER_BATCH = 10;

export const publishMessages = async <T>(
  messages: Array<T>,
  queueUrl: string
): Promise<Array<SNS.PublishBatchResponse>> => {
  const messagesChucked = chunkArray(messages, MAX_MESSAGE_PER_BATCH);
  return Promise.all(messagesChucked.map((messageChucked) => publishMessagesBatch(messageChucked, queueUrl)));
};

const publishMessagesBatch = async <T>(messages: Array<T>, topicArn: string): Promise<SNS.PublishBatchResponse> => {
  const entries: SNS.PublishBatchRequestEntryList = messages.map((message, index) => {
    return {
      Id: String(index),
      Message: JSON.stringify(message),
    };
  });

  const params: SNS.PublishBatchInput = {
    TopicArn: topicArn,
    PublishBatchRequestEntries: entries,
  };

  return sns.publishBatch(params).promise();
};
