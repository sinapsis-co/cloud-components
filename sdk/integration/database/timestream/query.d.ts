import { QueryCommandOutput } from '@aws-sdk/client-timestream-query';
export declare const timestreamQuery: (query: string, nextToken?: string) => Promise<QueryCommandOutput>;
