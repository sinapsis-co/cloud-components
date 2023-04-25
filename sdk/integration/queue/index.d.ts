import { DeleteMessageCommandOutput, SendMessageBatchCommandOutput, SendMessageBatchRequestEntry, SQSClient } from '@aws-sdk/client-sqs';
export declare const sqs: SQSClient;
export declare const sendMessages: <T>(messages: T[], queueUrl: string, params?: Pick<SendMessageBatchRequestEntry, 'DelaySeconds' | 'MessageDeduplicationId' | 'MessageGroupId'>) => Promise<Array<SendMessageBatchCommandOutput>>;
export declare const deleteMessage: (receiptHandle: string, queueUrl: string) => Promise<DeleteMessageCommandOutput>;
