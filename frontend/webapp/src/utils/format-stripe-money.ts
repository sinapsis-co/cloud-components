export const userLocale = (
  navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language
).split('-')[0];

export const formatStripeMoney = (value?: number, divide?: boolean): string => {
  if (!value) {
    return '0';
  }
  return (
    (divide ? (value || 0) / 100 : value || 0)?.toLocaleString(userLocale.includes('es') ? 'de-DE' : userLocale, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) || '0'
  );
};
