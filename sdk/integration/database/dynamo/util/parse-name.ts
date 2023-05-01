export const parseTableName = (tableName: string): string => {
  return `TABLE_${tableName.toLocaleUpperCase().split('-').join('_')}`;
};
