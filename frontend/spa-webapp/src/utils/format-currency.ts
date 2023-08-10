import { useIntl } from 'react-intl';

export const formatCurrency = (value: number, stripeDivide?: boolean): string => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const intl = useIntl();
  return Intl.NumberFormat(intl.locale, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
  }).format(stripeDivide ? (value || 0) / 100 : value);
};
