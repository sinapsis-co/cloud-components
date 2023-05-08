import { DynamoDBGetItemRequest } from '@aws-appsync/utils';
import { Model } from '@sinapsis-co/cc-sdk/model';

export const resolverGetItem = <M extends Model>(
  key: M['StoreBuilder']['keyMapping'],
  params?: Partial<DynamoDBGetItemRequest>
): DynamoDBGetItemRequest => {
  return {
    operation: 'GetItem',
    key: util.dynamodb.toMapValues(key),
    ...params,
  };
};
