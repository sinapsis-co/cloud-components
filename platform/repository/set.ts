import * as Dynamo from 'aws-sdk/clients/dynamodb';
const dynamo = new Dynamo.DocumentClient();

export const toArrayFromSet = (set: Dynamo.DocumentClient.DynamoDbSet): Array<unknown> => {
  if (!set) return [];
  if (Array.isArray(set)) return set;
  return Array.isArray(set.values) ? set.values : [];
};

export const fromArrayToSet = (values: string[]): Dynamo.DocumentClient.DynamoDbSet => {
  if (!values || values.length === 0) throw Error('Cannot convert empty array into a set');
  return dynamo.createSet(values);
};
