import { NativeAttributeValue } from '@aws-sdk/util-dynamodb';
export type LastEvaluatedKey = Record<string, NativeAttributeValue>;
export const encodeLastEvaluatedKey = (lastEvaluatedKey?: LastEvaluatedKey): string | null => {
  if (!lastEvaluatedKey) return null;

  return Buffer.from(JSON.stringify(lastEvaluatedKey)).toString('base64');
};

export const decodeLastEvaluatedKey = (lastEvaluatedKeyEncoded?: string): LastEvaluatedKey | undefined => {
  try {
    if (!lastEvaluatedKeyEncoded) return undefined;

    return JSON.parse(Buffer.from(lastEvaluatedKeyEncoded, 'base64').toString('ascii'));
  } catch (error) {
    return undefined;
  }
};
