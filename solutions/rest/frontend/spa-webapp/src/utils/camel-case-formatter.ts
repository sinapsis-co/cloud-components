export const camelCaseFormatter = (camelCase: string) => {
  return camelCase
    .split(/(?=[A-Z0-9])/)
    .join(' ')
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase())
    .trim();
};
