// This file contains the colors configuration for the Material UI theme.
const primaryMain = '#F9A825';
const primaryDark = '#CC7E00';
const primaryLight = '#FFECAD';
const contrastText = '#16181d';

const secondaryMain = '#007FFF';
const secondaryDark = '#0057b3';
const secondaryLight = '#66a3ff';

const success = '#1dac64';
const successLight = '#58d681';
const successDark = '#0e6d3c';

const error = '#dc2a2a';
const errorLight = '#f05959';
const errorDark = '#9e0000';

const warning = '#ff9a00';
const warningLight = '#ffc149';
const warningDark = '#c66c00';

const textPrimary = '#212b36';
const textSecondary = '#526666';
const textDisabled = '#B4BDBD';
const commonWhite = '#FFFFFF';
const grey100 = '#202124';
const grey300 = '#42525e';
const greyPaper = '#F0F0F2';
const grey100Light = '#F9FBFC';
const grey300Light = '#E6E6E6';
const contrastBackgroundDark = '#333333';
const contrastBackgroundLight = '#F5F5F5';

export const colors = {
  primary: {
    main: primaryMain,
    dark: primaryDark,
    light: primaryLight,
    contrastText,
  },
  secondary: {
    main: secondaryMain,
    dark: secondaryDark,
    light: secondaryLight,
    contrastText,
  },
  success: {
    main: success,
    dark: successDark,
    light: successLight,
    contrastText: commonWhite,
  },
  error: {
    main: error,
    dark: errorDark,
    light: errorLight,
    contrastText: commonWhite,
  },
  warning: {
    main: warning,
    dark: warningDark,
    light: warningLight,
    contrastText,
  },
  text: {
    primary: textPrimary,
    secondary: textSecondary,
    disabled: textDisabled,
  },
  common: {
    white: commonWhite,
    grey100,
    grey300,
    greyPaper,
    grey100Light,
    grey300Light,
    contrastBackgroundDark,
    contrastBackgroundLight,
  },
};
