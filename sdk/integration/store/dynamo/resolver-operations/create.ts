import { DynamoDBPutItemRequest } from '@aws-appsync/utils';
import { Model } from '@sinapsis-co/cc-sdk/model';

export const resolverCreateItem = <M extends Model>(
  type: M['Type'],
  key: M['Key'],
  serializedKey: M['StoreBuilder']['keyMapping'],
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
