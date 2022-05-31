import { DynamoDB } from 'aws-sdk';

export const encodeLastEvaluatedKey = (lastEvaluatedKey?: DynamoDB.DocumentClient.Key): string | null => {
  if (!lastEvaluatedKey) return null;

  return Buffer.from(JSON.stringify(lastEvaluatedKey)).toString('base64');
};

export const decodeLastEvaluatedKey = (lastEvaluatedKeyEncoded?: string): DynamoDB.DocumentClient.Key | undefined => {
  try {
    if (!lastEvaluatedKeyEncoded) return undefined;

    return JSON.parse(Buffer.from(lastEvaluatedKeyEncoded, 'base64').toString('ascii'));
  } catch (error) {
    return undefined;
  }
};
