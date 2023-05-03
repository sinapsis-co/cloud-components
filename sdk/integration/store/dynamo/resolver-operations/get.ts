import { DynamoDBGetItemRequest } from '@aws-appsync/utils';
import { TableStoreBuilder } from '../types/table-store-builder';

export const resolverGetItem = <TSBuilder extends TableStoreBuilder = TableStoreBuilder>(
  key: TSBuilder['keyMapping'],
  params?: Partial<DynamoDBGetItemRequest>
): DynamoDBGetItemRequest => {
  return {
    operation: 'GetItem',
    key: util.dynamodb.toMapValues(key),
    ...params,
  };
};
