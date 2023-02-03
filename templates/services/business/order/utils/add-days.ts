export const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const addMinutes = (date: Date, min: number): Date => {
  const result = new Date(date);
  result.setMinutes(result.getMinutes() + min);
  return result;
};
