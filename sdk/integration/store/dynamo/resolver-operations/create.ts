import { DynamoDBPutItemRequest } from '@aws-appsync/utils';
import { Model } from 'model';
import { TableStoreBuilder } from '../types/table-store-builder';

export const resolverCreateItem = <T extends TableStoreBuilder, M extends Model>(
  type: M['Type'],
  key: M['Key'],
  serializedKey: T['keyMapping'],
  body: M['Body'],
  params?: Partial<DynamoDBPutItemRequest>
): DynamoDBPutItemRequest => {
  return {
    operation: 'PutItem',
    key: util.dynamodb.toMapValues(serializedKey),
    attributeValues: util.dynamodb.toMapValues({
      type: type,
      ...key,
      ...body,
      createdAt: util.time.nowISO8601(),
      updatedAt: util.time.nowISO8601(),
    }),
    ...params,
  };
};
