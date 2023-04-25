"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMapper = void 0;
const updateMapper = (itemToUpdate, extraAtt) => {
    let UpdateExpression = 'SET #updatedAt = :updatedAt,';
    const ExpressionAttributeNames = { '#updatedAt': 'updatedAt' };
    const ExpressionAttributeValues = { ':updatedAt': new Date().toISOString() };
    Object.keys(new Object(itemToUpdate)).forEach((key) => {
        if (key !== 'updatedAt') {
            UpdateExpression += ` #${key} = :${key},`;
            ExpressionAttributeNames[`#${key}`] = key;
            ExpressionAttributeValues[`:${key}`] = itemToUpdate[key];
        }
    });
    if (UpdateExpression.endsWith(','))
        UpdateExpression = UpdateExpression.slice(0, -1);
    if (extraAtt) {
        Object.keys(extraAtt).forEach((keyAtt) => {
            ExpressionAttributeNames[`#${keyAtt}`] = keyAtt;
            ExpressionAttributeValues[`:${keyAtt}`] = extraAtt[keyAtt];
        });
    }
    return { UpdateExpression, ExpressionAttributeNames, ExpressionAttributeValues };
};
exports.updateMapper = updateMapper;
