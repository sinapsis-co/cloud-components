import { UpdateCommandInput } from '@aws-sdk/lib-dynamodb';
type updateMapperReturn = {
    UpdateExpression: UpdateCommandInput['UpdateExpression'];
    ExpressionAttributeNames: UpdateCommandInput['ExpressionAttributeNames'];
    ExpressionAttributeValues: UpdateCommandInput['ExpressionAttributeValues'];
};
export declare const updateMapper: <T>(itemToUpdate: T, extraAtt?: Record<string, unknown>) => updateMapperReturn;
export {};
