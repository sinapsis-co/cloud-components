import { SSMClient } from '@aws-sdk/client-ssm';
export declare const ssm: SSMClient;
export declare const getConfig: <T>() => Promise<T>;
