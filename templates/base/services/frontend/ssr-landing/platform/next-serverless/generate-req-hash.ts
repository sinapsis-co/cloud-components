import { createHash } from 'crypto';
import { CloudFrontRequest } from 'aws-lambda';

const generateUrlHash = (x: string): string => createHash('sha256').update(x, 'utf8').digest('hex');

export const getRequestHash = (request: CloudFrontRequest): string => {
  const { uri, querystring, headers } = request;
  const domain = headers['x-forwarded-host'][0].value;
  const hashInput = `${domain}${uri}${querystring}`;
  const hash = generateUrlHash(hashInput);
  return hash;
};
