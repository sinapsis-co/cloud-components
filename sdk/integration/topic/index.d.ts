import { PublishBatchCommandOutput } from '@aws-sdk/client-sns';
export declare const publishMessages: <T>(messages: T[], topicArn: string) => Promise<Array<PublishBatchCommandOutput>>;
