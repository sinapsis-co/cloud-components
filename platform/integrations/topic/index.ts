import {
  PublishBatchCommand,
  PublishBatchCommandInput,
  PublishBatchCommandOutput,
  SNSClient,
} from '@aws-sdk/client-sns';
import { PlatformFault } from '../../error';
import { Tracing } from '../../tracing';
import { chunkArray } from '../../util/chunk-array';

const sns: SNSClient = Tracing.captureIntegration(new SNSClient({}) as any);

const MAX_MESSAGE_PER_BATCH = 10;

export const publishMessages = async <T>(
  messages: Array<T>,
  topicArn: string
): Promise<Array<PublishBatchCommandOutput>> => {
  const cmd = async () => {
    const messagesChucked = chunkArray(messages, MAX_MESSAGE_PER_BATCH);
    return Promise.all(messagesChucked.map((messageChucked) => publishMessagesBatch(messageChucked, topicArn)));
  };
  return Tracing.traceableOp('PushMessages', 'FAULT_SNS_SEND_MESSAGES', topicArn, cmd);
};

// Private use only
const publishMessagesBatch = async <T>(messages: Array<T>, topicArn: string): Promise<PublishBatchCommandOutput> => {
  const entries: PublishBatchCommandInput['PublishBatchRequestEntries'] = messages.map((message, index) => {
    return { Id: String(index), Message: JSON.stringify(message) };
  });
  return sns.send(new PublishBatchCommand({ TopicArn: topicArn, PublishBatchRequestEntries: entries })).catch((err) => {
    throw new PlatformFault({ code: 'FAULT_SNS_SEND_MESSAGES', detail: err.message });
  });
};
