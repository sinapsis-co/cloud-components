import React from 'react';

import { ProviderContext, VariantType, useSnackbar } from 'notistack';
import { OptionsObject } from 'notistack';
import { IntlShape, useIntl } from 'react-intl';

const SNACKBAR_CONFIG: OptionsObject = {
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'center',
  },
  preventDuplicate: true,
  autoHideDuration: 5000,
};

let useSnackbarRef: ProviderContext;
let intl: IntlShape;
export const SnackbarUtilsConfigurator: React.FC = () => {
  useSnackbarRef = useSnackbar();
  intl = useIntl();
  return null;
};

export default {
  success(msg: string) {
    this.toast(msg, 'success');
  },
  warning(msg: string) {
    this.toast(msg, 'warning');
  },
  info(msg: string) {
    this.toast(msg, 'info');
  },
  error(msg: string) {
    this.toast(msg, 'error');
  },
  toast(msg: string, variant: VariantType = 'default') {
    useSnackbarRef.enqueueSnackbar(this.formatMessage(msg), { ...SNACKBAR_CONFIG, variant });
  },
  close(key: string) {
    useSnackbarRef.closeSnackbar(key);
  },
  formatMessage(message: string) {
    return intl.formatMessage({ id: message, defaultMessage: message });
  },
};
