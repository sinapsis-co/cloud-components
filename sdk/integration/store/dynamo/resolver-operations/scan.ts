import { DynamoDBScanRequest } from '@aws-appsync/utils';
import { PaginatedInput } from 'handler/resolver';

export const resolverScan = (
  paginatedReq: PaginatedInput,
  params?: Partial<DynamoDBScanRequest>
): DynamoDBScanRequest => {
  const { limit, nextToken } = paginatedReq;
  return {
    operation: 'Scan',
    limit,
    nextToken,
    ...params,
  };
};
