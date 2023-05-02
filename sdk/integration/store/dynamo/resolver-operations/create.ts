import { DynamoDBPutItemRequest } from '@aws-appsync/utils';

import { EntityBuilder } from 'model';
import { TableStoreBuilder } from '../types/table-store-builder';

export const resolverCreateItem = <
  EBuilder extends EntityBuilder,
  TSBuilder extends TableStoreBuilder = TableStoreBuilder
>(
  key: TSBuilder['storeMapping']['key'],
  body: EBuilder['body'] & TSBuilder['storeMapping']['timers'],
  params?: Partial<DynamoDBPutItemRequest>
): DynamoDBPutItemRequest => {
  return {
    operation: 'PutItem',
    key: util.dynamodb.toMapValues(key),
    attributeValues: util.dynamodb.toMapValues(body),
    ...params,
  };
};
