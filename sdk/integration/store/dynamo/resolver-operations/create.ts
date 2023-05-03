import { DynamoDBPutItemRequest } from '@aws-appsync/utils';

import { EntityBuilder } from 'model';
import { TableStoreBuilder } from '../types/table-store-builder';

export const resolverCreateItem = <
  EBuilder extends EntityBuilder,
  TSBuilder extends TableStoreBuilder = TableStoreBuilder
>(
  key: TSBuilder['keyMapping'],
  body: EBuilder['body'],
  params?: Partial<DynamoDBPutItemRequest>
): DynamoDBPutItemRequest => {
  return {
    operation: 'PutItem',
    key: util.dynamodb.toMapValues(key),
    attributeValues: util.dynamodb.toMapValues({
      ...body,
      createdAt: util.time.nowISO8601(),
      updatedAt: util.time.nowISO8601(),
    }),
    ...params,
  };
};
