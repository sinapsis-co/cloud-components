export const capFirstLetter = (stringToConvert: string): string => {
  return stringToConvert.charAt(0).toUpperCase() + stringToConvert.slice(1);
};

export const toDashCase = (stringToConvert: string): string => {
  return stringToConvert
    .split(/(?=[A-Z])/)
    .join('-')
    .toLowerCase();
};

export const toSnakeCase = (stringToConvert: string): string => {
  return stringToConvert
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase();
};
