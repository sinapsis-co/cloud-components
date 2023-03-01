// import { SnackbarStatusProps } from './../../components/basics/snackbar/snackbar-status/index';
// import { DialogConfiguration } from '../../types/ui/dialog-configuration';
import { UIMenus } from './types';
// import { SnackbarNotificationData } from '../../types/ui/snackbar-notification-data';

export interface UIState {
  errors: {
    [key: string]: string | undefined;
  };
  loading: {
    [key: string]: false | 'main' | 'local';
  };
  // dialogs: {
  //   [key: string]: DialogConfiguration
  // };
  // snackbar: {
  //   [key: string]: SnackbarNotificationData | undefined;
  // };
  // snackbarStatus: {
  //   [key: string]: SnackbarStatusProps | undefined;
  // };
  mobile: boolean;
  smallScreen: boolean;
  showBackdrop: boolean;
  menuOpened?: UIMenus;
}
