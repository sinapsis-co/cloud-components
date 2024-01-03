export const expressionMapper = (
  attributesMap: Record<string, any>
): { ExpressionAttributeNames: Record<string, string>; ExpressionAttributeValues: Record<string, string> } => {
  return Object.entries(attributesMap).reduce(
    (memo, [key, value]) => {
      memo['ExpressionAttributeNames'][`#${key}`] = key;
      memo['ExpressionAttributeValues'][`:${key}`] = value;
      return memo;
    },
    { ExpressionAttributeNames: {}, ExpressionAttributeValues: {} }
  );
};
