export const getLogicalName = (resourceType: string, resourceId = ''): string => {
  return `${resourceType}:${resourceId}`;
};
