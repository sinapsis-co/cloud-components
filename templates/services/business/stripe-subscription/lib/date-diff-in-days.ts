const _MS_PER_DAY = 1000 * 60 * 60 * 24;

export const dateDiffInDays = (a: Date, b: Date): number => {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};
