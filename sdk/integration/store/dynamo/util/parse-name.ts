export const parseTableName = (tableName: string): string => {
  return `TABLE_${tableName.toLocaleUpperCase().split('-').join('_')}`;
};

export type valueof<T> = T[keyof T];
