import { useIntl } from 'react-intl';

export const formatCurrency = (value: number, stripeDivide?: boolean): string => {
  const { locale } = useIntl();
  return Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  }).format(stripeDivide ? (value || 0) / 100 : value);
};
