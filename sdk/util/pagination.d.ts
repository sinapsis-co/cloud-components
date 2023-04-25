import { NativeAttributeValue } from '@aws-sdk/util-dynamodb';
export type LastEvaluatedKey = Record<string, NativeAttributeValue>;
export declare const encodeLastEvaluatedKey: (lastEvaluatedKey?: LastEvaluatedKey) => string | null;
export declare const decodeLastEvaluatedKey: (lastEvaluatedKeyEncoded?: string) => LastEvaluatedKey | undefined;
