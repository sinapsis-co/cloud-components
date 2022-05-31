import { DynamoDB } from 'aws-sdk';

type updateMapperReturn = {
  UpdateExpression: DynamoDB.UpdateExpression;
  ExpressionAttributeNames: DynamoDB.DocumentClient.ExpressionAttributeNameMap;
  ExpressionAttributeValues: DynamoDB.DocumentClient.ExpressionAttributeValueMap;
};

export const updateMapper = <T>(itemToUpdate: T, extraAtt?: Record<string, unknown>): updateMapperReturn => {
  let UpdateExpression = 'SET #updatedAt = :updatedAt,';
  const ExpressionAttributeNames = { '#updatedAt': 'updatedAt' };
  const ExpressionAttributeValues = { ':updatedAt': new Date().toISOString() };
  Object.keys(itemToUpdate).forEach((key) => {
    if (key !== 'updatedAt') {
      UpdateExpression += ` #${key} = :${key},`;
      ExpressionAttributeNames[`#${key}`] = key;
      ExpressionAttributeValues[`:${key}`] = itemToUpdate[key];
    }
  });
  if (UpdateExpression.endsWith(',')) UpdateExpression = UpdateExpression.slice(0, -1);
  if (extraAtt)
    Object.keys(extraAtt).forEach((keyAtt) => {
      ExpressionAttributeNames[`#${keyAtt}`] = keyAtt;
      ExpressionAttributeValues[`:${keyAtt}`] = extraAtt[keyAtt];
    });
  return { UpdateExpression, ExpressionAttributeNames, ExpressionAttributeValues };
};
