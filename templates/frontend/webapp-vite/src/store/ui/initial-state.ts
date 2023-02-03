import { UIState } from './state';
// import { isMobile, isSmallScreen } from '@components/styles';

export const uiInitialState: UIState = {
  errors: {},
  loading: {},
  // dialogs: {},
  // snackbar: {},
  // snackbarStatus: {},
  // mobile: isMobile(),
  // smallScreen: isSmallScreen(),
  mobile: false,
  smallScreen: false,
  showBackdrop: false,
};
