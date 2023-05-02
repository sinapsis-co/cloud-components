import { DynamoDBScanRequest } from '@aws-appsync/utils';

export const resolverScan = (
  limit: number | undefined,
  nextToken: string | undefined,
  params?: Partial<DynamoDBScanRequest>
): DynamoDBScanRequest => {
  return {
    operation: 'Scan',
    limit,
    nextToken,
    ...params,
  };
};
