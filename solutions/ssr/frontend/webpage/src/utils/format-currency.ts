import { useIntl } from 'react-intl';

export const formatCurrency = (value: number): string => {
  const intl = useIntl();
  return Intl.NumberFormat(intl.locale, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  }).format(value);
};
