import { PaletteMode } from '@mui/material';
import { PaletteColorOptions, alpha, styled } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles/createTheme';
import { MaterialDesignContent } from 'notistack';

// Alert
type AlertTypes = 'filled' | 'outlined' | 'standard';
export const AlertType: AlertTypes = 'filled';

// Button
type ButtonTypes = 'text' | 'outlined' | 'contained';
export const buttonVariant: ButtonTypes = 'contained';
const buttonFontSizeLarge = '14px';
const buttonPaddingLarge = '16px 24px';
const buttonFontSizeSmall = '14px';
const buttonPaddingSmall = '12px 16px';

// Inputs
type InputTypes = 'standard' | 'filled' | 'outlined';
export const inputVariant: InputTypes = 'outlined';

type InputSizeTypes = 'small' | 'medium' | undefined;
export const inputSize: InputSizeTypes = 'medium';

declare module '@mui/material/styles' {
  interface CustomPalette {
    white: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

// Colors
const primaryMain = '#65d872';
const primaryDark = '#1dac64';
const primaryLight = '#b3edb9';
const contrastText = '#16181d';
const secondaryMain = '#e6332a';
const secondaryDark = '#a20008';
const secondaryLight = '#ff7a70';
const success = '#1dac64';
const error = '#dc2a2a';
const errorLight = '#FFA6A6';
const warning = '#ff9a00';
const commonText = '#212b36';

// Typography
const fontFamily = 'Montserrat';
// const superFontSize = '48px';
const h1FontSize = '40px';
const h2FontSize = '32px';
const h2FontWeight = '600';
const h3FontSize = '24px';
const h3FontWeight = '600';
const h4FontSize = '20px';
const h5FontSize = '16px';
const h5FontWeight = '600';
const body1FontSize = '14px';
const tooltipFontSize = '14px';
const captionFontSize = '12px';
const linkFontSize = '14px';
const linkFontWeight = '600';

// Common
const borderRadius = '8px';

const darkModePalette = [
  {
    background: '#212b36',
    primaryText: '#ffffff',
    secondaryText: '#c4c4c4',
    grey100: '#202124',
    grey300: '#42525e',
    paper: '#1D1E21',
    divider: '#16181d',
  },
];

const lightModePalette = [
  {
    background: '#ffffff',
    primaryText: '#212b36',
    secondaryText: '#777a7c',
    grey100: '#F9FBFC',
    grey300: '#DEDEDE',
    paper: '#F2F1F0',
    divider: alpha('#e8e8e8', 0.75),
  },
];

export const getPaletteMode = (mode: PaletteMode): Partial<ThemeOptions> => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          primary: {
            main: primaryMain,
            dark: primaryDark,
            light: primaryLight,
            contrastText: contrastText,
          },
          secondary: {
            main: secondaryMain,
            dark: secondaryDark,
            light: secondaryLight,
          },
          white: {
            main: '#ffffff',
          },
          text: {
            primary: darkModePalette[0].primaryText,
            secondary: darkModePalette[0].secondaryText,
          },
          grey: {
            100: darkModePalette[0].grey100,
            300: darkModePalette[0].grey300,
          },
          success: {
            main: success,
          },
          error: {
            main: error,
          },
          warning: {
            main: warning,
            dark: secondaryDark,
            light: secondaryLight,
          },
          background: {
            default: darkModePalette[0].background,
            paper: darkModePalette[0].paper,
          },
          originalBackground: {
            default: darkModePalette[0].background,
          },
          action: {
            hover: lightModePalette[0].grey300,
          },
        }
      : {
          primary: {
            main: primaryMain,
            dark: primaryDark,
            light: primaryLight,
            contrastText: contrastText,
          },
          secondary: {
            main: secondaryMain,
            dark: secondaryDark,
            light: secondaryLight,
          },
          white: {
            main: '#ffffff',
          },
          text: {
            primary: lightModePalette[0].primaryText,
            secondary: lightModePalette[0].secondaryText,
          },
          grey: {
            100: lightModePalette[0].grey100,
            300: lightModePalette[0].grey300,
          },
          success: {
            main: success,
          },
          error: {
            main: error,
          },
          warning: {
            main: warning,
          },
          background: {
            default: lightModePalette[0].background,
            paper: lightModePalette[0].paper,
          },
          originalBackground: {
            default: lightModePalette[0].background,
          },
          action: {
            hover: lightModePalette[0].grey300,
          },
        }),
  },
});

export const CustomThemeOptions = (mode: PaletteMode): Partial<ThemeOptions> => ({
  typography: {
    fontFamily: [fontFamily, 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: h1FontSize,
    },
    h2: {
      fontSize: h2FontSize,
      fontWeight: h2FontWeight,
    },
    h3: {
      fontSize: h3FontSize,
      fontWeight: h3FontWeight,
    },
    h4: {
      fontSize: h4FontSize,
    },
    h5: {
      fontSize: h5FontSize,
      fontWeight: h5FontWeight,
    },
    body1: {
      fontSize: body1FontSize,
    },
    caption: {
      fontSize: captionFontSize,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: `1px solid ${mode === 'dark' ? darkModePalette[0].grey300 : lightModePalette[0].grey300}`,
          borderRadius: borderRadius,
          backgroundColor: mode === 'dark' ? darkModePalette[0].background : lightModePalette[0].background,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          fontWeight: '700',
          textTransform: 'capitalize',
          borderRadius: borderRadius,
          padding: buttonPaddingLarge,
          fontSize: buttonFontSizeLarge,
          transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
      variants: [
        {
          props: { variant: 'contained' },
          style: {
            color: commonText,
          },
        },
        {
          props: { variant: 'text' },
          style: {
            color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,

            backgroundColor: alpha(
              mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
              0
            ),
            '&:hover': {
              backgroundColor: alpha(
                mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
                0.1
              ),
            },
            '&.border': {
              border: '1px solid',
              borderColor: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            '&:hover': {
              backgroundColor: primaryLight,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            color: '#ffffff',
            '&:hover': {
              backgroundColor: secondaryDark,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'error' },
          style: {
            color: '#ffffff',
            backgroundColor: error,
            '&:hover': {
              color: commonText,
              backgroundColor: errorLight,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'white' },
          style: {
            backgroundColor: '#ffffff',
            color: commonText,
            '&:hover': {
              backgroundColor: alpha('#ffffff', 0.5),
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            borderWidth: 1,
            borderColor: primaryDark,
            color: primaryDark,
            '&:hover': {
              backgroundColor: alpha(primaryLight, 0.15),
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'info' },
          style: {
            borderWidth: 1,
            borderColor: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
            color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
            '&:hover': {
              backgroundColor: alpha(
                mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
                0.1
              ),
              borderColor: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
              color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'white' },
          style: {
            borderWidth: 1,
            borderColor: '#ffffff',
            color: '#ffffff',
            '&:hover': {
              backgroundColor: alpha('#ffffff', 0.5),
              borderColor: '#ffffff',
              color: '#ffffff',
            },
          },
        },
        {
          props: { size: 'small' },
          style: {
            padding: buttonPaddingSmall,
            fontSize: buttonFontSizeSmall,
            lineHeight: '16px',
            maxHeight: '40px',
          },
        },
      ],
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          outline: 'none',
          '&:focus': {
            outline: 'none',
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          background: mode === 'dark' ? darkModePalette[0].background : lightModePalette[0].background,
          borderRadius: borderRadius,
          transition: 'border 250ms ease-in',
          '& :-webkit-autofill': {
            animation: 'none !important',
            WebkitBoxShadow: `0 0 0 1000px ${
              mode === 'dark' ? darkModePalette[0].background : lightModePalette[0].background
            } inset !important`,
            WebkitTextFillColor: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          background: mode === 'dark' ? darkModePalette[0].background : lightModePalette[0].background,
          borderRadius: borderRadius,
          transition: 'border 250ms ease-in',
          '& :-webkit-autofill': {
            animation: 'none !important',
            WebkitBoxShadow: `0 0 0 1000px ${
              mode === 'dark' ? darkModePalette[0].background : lightModePalette[0].background
            } inset !important`,
            WebkitTextFillColor: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          },
        },
        notchedOutline: {
          borderRadius: borderRadius,
          borderWidth: '2px',
          transition: 'border 250ms ease-in',
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          background: 'transparent',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: mode === 'dark' ? darkModePalette[0].secondaryText : lightModePalette[0].secondaryText,
        },
        colorPrimary: {
          '&.Mui-checked': {
            color: primaryDark,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius,
          outline: 'none',
          background: 'transparent',
        },
        input: {
          borderRadius: borderRadius,
          color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          background: 'transparent',
          '& label': {
            color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          borderRadius: borderRadius,
          outline: 'none',
          background: 'transparent',
          '& label': {
            color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: tooltipFontSize,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: h1FontSize,
        },
        h2: {
          fontSize: h2FontSize,
          fontWeight: h2FontWeight,
        },
        h3: {
          fontSize: h3FontSize,
          fontWeight: h3FontWeight,
        },
        h4: {
          fontSize: h4FontSize,
        },
        h5: {
          fontSize: h5FontSize,
          fontWeight: h5FontWeight,
        },
        body1: {
          fontSize: body1FontSize,
        },
        caption: {
          fontSize: captionFontSize,
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover:not(&.Mui-selected)': {
            color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
            backgroundColor:
              mode === 'dark'
                ? alpha(darkModePalette[0].primaryText, 0.08)
                : alpha(lightModePalette[0].primaryText, 0.08),
          },
          '&.Mui-selected': {
            backgroundColor: mode === 'dark' ? darkModePalette[0].grey300 : lightModePalette[0].grey300,
            '&:hover': {
              backgroundColor: mode === 'dark' ? darkModePalette[0].grey300 : lightModePalette[0].grey300,
            },
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          span: {
            fontWeight: 500,
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: borderRadius,
        },
        action: {
          padding: '4px 0',
        },
        standardSuccess: {
          color: success,
          backgroundColor: success,
          borderRadius: borderRadius,
        },
        standardError: {
          backgroundColor: error,
          borderRadius: borderRadius,
        },
        outlinedSuccess: {
          borderColor: error,
          backgroundColor: alpha(success, 0.1),
        },
        outlinedError: {
          borderRadius: borderRadius,
          backgroundColor: alpha(error, 0.1),
          borderColor: error,
        },
        outlinedInfo: {
          color: commonText,
          borderColor: commonText,
          backgroundColor: alpha(commonText, 0.1),
        },
        filledSuccess: {
          borderColor: success,
          backgroundColor: alpha(success, 0.1),
        },
        filledError: {
          backgroundColor: alpha(error, 0.1),
        },
        filledInfo: {
          color: commonText,
          backgroundColor: alpha(commonText, 0.1),
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: borderRadius,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: linkFontSize,
          fontWeight: linkFontWeight,
          color: primaryDark,
          cursor: 'pointer',
          transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            color: primaryMain,
          },
        },
      },
      variants: [
        {
          props: { variant: 'caption' },
          style: {
            fontSize: captionFontSize,
          },
        },
        {
          props: { color: 'secondary' },
          style: {
            color: secondaryMain,
            '&:hover': {
              color: secondaryDark,
            },
          },
        },
      ],
    },
    MuiAutocomplete: {
      styleOverrides: {
        listbox: {
          position: 'relative',
          zIndex: 999,
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: commonText,
          fontWeight: 500,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
        },
      },
      variants: [
        {
          props: { variant: 'filled', color: 'default' },
          style: {
            color: mode === 'dark' ? darkModePalette[0].background : lightModePalette[0].background,
            backgroundColor: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          },
        },
        {
          props: { variant: 'filled', color: 'primary' },
          style: {
            color: 'white',
            backgroundColor: primaryDark,
          },
        },
        {
          props: { variant: 'filled', color: 'warning' },
          style: {
            color: 'white',
            backgroundColor: warning,
          },
        },
        {
          props: { variant: 'filled', color: 'error' },
          style: {
            color: 'white',
            backgroundColor: error,
          },
        },
        {
          props: { variant: 'outlined', color: 'default' },
          style: {
            borderColor: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
            color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
            backgroundColor: alpha(
              mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
              0.05
            ),
          },
        },
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            borderColor: primaryDark,
            color: primaryDark,
            backgroundColor: alpha(primaryLight, 0.15),
          },
        },
        {
          props: { variant: 'outlined', color: 'warning' },
          style: {
            borderColor: warning,
            color: warning,
            backgroundColor: alpha(warning, 0.15),
          },
        },
        {
          props: { variant: 'outlined', color: 'error' },
          style: {
            borderColor: error,
            color: error,
            backgroundColor: alpha(error, 0.15),
          },
        },
      ],
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: mode === 'dark' ? darkModePalette[0].grey300 : lightModePalette[0].grey300,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .MuiTabs-indicator': {
            backgroundColor: primaryMain,
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          borderRadius: '4px 4px 0 0',
          transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            backgroundColor: mode === 'dark' ? darkModePalette[0].grey100 : lightModePalette[0].grey100,
          },
          '&.Mui-selected': {
            backgroundColor: primaryMain,
            color: commonText,
          },
          '&.Mui-disabled': {
            color: mode === 'dark' ? darkModePalette[0].grey300 : lightModePalette[0].grey300,
          },
        },
      },
    },
  },
});

export const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '.notistack-Snackbar': {
    borderRadius: borderRadius,
  },
  '&.notistack-MuiContent-success': {
    backgroundColor: success,
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: error,
  },
  '&.notistack-MuiContent-warning': {
    backgroundColor: warning,
  },
}));
