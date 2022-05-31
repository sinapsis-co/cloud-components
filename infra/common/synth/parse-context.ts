export const parseContext = (stringContext: string): string => {
  if (!stringContext) return '';
  return stringContext
    .split('&')
    .map((c) => `--context ${c} `)
    .join('');
};
