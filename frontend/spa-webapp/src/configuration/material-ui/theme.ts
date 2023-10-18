import { PaletteColor, PaletteColorOptions, PaletteMode } from '@mui/material';
import '@mui/material/Button';
import { alpha, styled } from '@mui/material/styles';
import { ThemeOptions } from '@mui/material/styles/createTheme';
import type {} from '@mui/x-data-grid-pro/themeAugmentation';

import { MaterialDesignContent } from 'notistack';

// Custom theme configuration
import { button } from './button';
import { colors } from './colors';
import { sizes } from './sizes';
import { typography } from './typography';

// Extend the Material-UI palette to include custom colors
declare module '@mui/material/styles' {
  interface CustomPalette {
    white: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/styles' {
  interface Palette {
    customBackground: PaletteColor;
  }
  interface PaletteOptions {
    customBackground?: PaletteColorOptions;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    white: true;
  }
}

// Define color palettes for dark and light modes
const darkModePalette = [
  // Define dark mode color palette
  {
    background: colors.common.contrastBackgroundDark,
    primaryText: colors.common.white,
    secondaryText: colors.text.secondary,
    textDisabled: colors.text.disabled,
    grey100: colors.common.grey100,
    grey300: colors.common.grey300,
    paper: colors.common.greyPaperDark,
    contrastBackground: colors.common.contrastBackgroundDark,
    divider: colors.primary.contrastText,
  },
];

const lightModePalette = [
  // Define light mode color palette
  {
    background: colors.common.contrastBackgroundLight,
    primaryText: colors.text.primary,
    secondaryText: colors.text.secondaryLight,
    textDisabled: colors.text.disabled,
    grey100: colors.common.grey100Light,
    grey300: colors.common.grey300Light,
    paper: colors.common.greyPaper,
    contrastBackground: colors.common.contrastBackgroundLight,
    divider: colors.common.grey300Light,
  },
];

export const darkModePaletteColors = {
  // Custom dark mode palette
  primary: {
    main: colors.primary.main,
    dark: colors.primary.dark,
    light: colors.primary.light,
    contrastText: colors.primary.contrastText,
  },
  secondary: {
    main: colors.secondary.main,
    dark: colors.secondary.dark,
    light: colors.secondary.light,
  },
  white: {
    main: colors.common.white,
  },
  divider: darkModePalette[0].divider,
  text: {
    primary: darkModePalette[0].primaryText,
    secondary: darkModePalette[0].secondaryText,
    disabled: darkModePalette[0].textDisabled,
  },
  grey: {
    100: darkModePalette[0].grey100,
    300: darkModePalette[0].grey300,
  },
  success: {
    main: colors.success.main,
    dark: colors.success.dark,
    light: colors.success.light,
  },
  error: {
    main: colors.error.main,
    dark: colors.error.dark,
    light: colors.error.light,
  },
  warning: {
    main: colors.warning.main,
    dark: colors.warning.dark,
    light: colors.warning.light,
  },
  background: {
    default: darkModePalette[0].background,
    paper: darkModePalette[0].paper,
  },
  customBackground: {
    main: darkModePalette[0].contrastBackground,
  },
  originalBackground: {
    default: darkModePalette[0].background,
  },
  action: {
    hover: lightModePalette[0].grey300,
  },
};
export const lightModePaletteColors = {
  // Custom light mode palette
  primary: {
    main: colors.primary.main,
    dark: colors.primary.dark,
    light: colors.primary.light,
    contrastText: colors.primary.contrastText,
  },
  secondary: {
    main: colors.secondary.main,
    dark: colors.secondary.dark,
    light: colors.secondary.light,
  },
  white: {
    main: colors.common.white,
  },
  divider: lightModePalette[0].divider,
  text: {
    primary: lightModePalette[0].primaryText,
    secondary: lightModePalette[0].secondaryText,
    disabled: darkModePalette[0].textDisabled,
  },
  grey: {
    100: lightModePalette[0].grey100,
    300: lightModePalette[0].grey300,
  },
  success: {
    main: colors.success.main,
    dark: colors.success.dark,
    light: colors.success.light,
  },
  error: {
    main: colors.error.main,
    dark: colors.error.dark,
    light: colors.error.light,
  },
  warning: {
    main: colors.warning.main,
    dark: colors.warning.dark,
    light: colors.warning.light,
  },
  background: {
    default: lightModePalette[0].background,
    paper: lightModePalette[0].paper,
  },
  customBackground: {
    main: lightModePalette[0].contrastBackground,
  },
  originalBackground: {
    default: lightModePalette[0].background,
  },
  action: {
    hover: lightModePalette[0].grey300,
  },
};

/**
 * Function to get the palette mode configuration based on the selected mode.
 *
 * @param mode The selected palette mode (either 'light' or 'dark').
 * @returns Partial ThemeOptions for the selected mode.
 */
export const getPaletteMode = (mode: PaletteMode): Partial<ThemeOptions> => ({
  palette: {
    mode,
    ...(mode === 'dark' ? darkModePaletteColors : lightModePaletteColors),
  },
});

/**
 * Function to create custom theme options based on the selected palette mode.
 *
 * @param mode The selected palette mode (either 'light' or 'dark').
 * @returns Partial ThemeOptions for the selected mode.
 */
export const CustomThemeOptions = (mode: PaletteMode): Partial<ThemeOptions> => ({
  typography: {
    fontFamily: typography.fontFamily,
    h1: {
      fontSize: typography.h1.fontSize,
      fontWeight: typography.h1.fontWeight,
    },
    h2: {
      fontSize: typography.h2.fontSize,
      fontWeight: typography.h2.fontWeight,
    },
    h3: {
      fontSize: typography.h3.fontSize,
      fontWeight: typography.h3.fontWeight,
    },
    h4: {
      fontSize: typography.h4.fontSize,
      fontWeight: typography.h4.fontWeight,
    },
    h5: {
      fontSize: typography.h5.fontSize,
      fontWeight: typography.h5.fontWeight,
    },
    body1: {
      fontSize: typography.body1.fontSize,
      fontWeight: typography.body1.fontWeight,
    },
    body2: {
      fontSize: typography.body2.fontSize,
      fontWeight: typography.body2.fontWeight,
    },
    caption: {
      fontSize: typography.caption.fontSize,
      fontWeight: typography.caption.fontWeight,
    },
  },
  shape: {
    borderRadius: sizes.borderRadius, // Define the default border radius for components
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          border: `1px solid ${mode === 'dark' ? darkModePalette[0].grey300 : lightModePalette[0].grey300}`,
          borderRadius: sizes.borderRadius,
          backgroundColor: mode === 'dark' ? darkModePalette[0].background : lightModePalette[0].background,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: sizes.borderRadius,
          padding: button.large.padding,
          fontSize: button.large.fontSize,
          fontWeight: '700',
          textTransform: 'none',
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
            color: colors.text.primary,
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
              backgroundColor: colors.primary.light,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: {
            color: colors.common.white,
            '&:hover': {
              backgroundColor: colors.secondary.dark,
            },
          },
        },
        {
          props: { variant: 'contained', color: 'error' },
          style: {
            color: colors.common.white,
            backgroundColor: colors.error.main,
            '&:hover': {
              color: colors.text.primary,
              backgroundColor: colors.error.light,
            },
          },
        },
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            borderWidth: 1,
            borderColor: colors.primary.dark,
            color: colors.primary.dark,
            '&:hover': {
              backgroundColor: alpha(colors.primary.light, 0.15),
            },
          },
        },
        {
          props: { size: 'small' },
          style: {
            padding: button.small.padding,
            fontSize: button.small.fontSize,
            lineHeight: button.small.lineHeight,
            maxHeight: button.small.maxHeight,
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
          background: 'transparent',
          borderRadius: sizes.borderRadius,
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
          borderRadius: sizes.borderRadius,
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
          borderRadius: sizes.borderRadius,
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
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          fontWeight: 600,
          '.MuiFormLabel-asterisk, .MuiInputLabel-asterisk': {
            color: `${colors.error.main} !important`,
          },
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
            color: colors.primary.dark,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: sizes.borderRadius,
          outline: 'none',
          background: 'transparent',
        },
        input: {
          borderRadius: sizes.borderRadius,
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
          borderRadius: sizes.borderRadius,
          outline: 'none',
          background: 'transparent',
          '& label': {
            color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          borderRadius: sizes.borderRadius,
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
          fontSize: typography.tooltip.fontSize,
          fontWeight: typography.tooltip.fontWeight,
          backdropFilter: 'blur(4px)',
          color: mode !== 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          backgroundColor: alpha(
            mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
            0.75
          ),
        },
        arrow: {
          color: alpha(mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText, 0.75),
          '&::before': {
            borderRadius: `{0 0 0 ${sizes.borderRadius}}`,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: typography.h1.fontSize,
        },
        h2: {
          fontSize: typography.h2.fontSize,
          fontWeight: typography.h2.fontWeight,
        },
        h3: {
          fontSize: typography.h3.fontSize,
          fontWeight: typography.h3.fontWeight,
        },
        h4: {
          fontSize: typography.h4.fontSize,
        },
        h5: {
          fontSize: typography.h5.fontSize,
          fontWeight: typography.h5.fontWeight,
        },
        body1: {
          fontSize: typography.body1.fontSize,
        },
        caption: {
          fontSize: typography.caption.fontSize,
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
          borderRadius: sizes.borderRadius,
        },
        action: {
          padding: '4px 0',
        },
        standardSuccess: {
          color: colors.success.main,
          backgroundColor: colors.success.main,
          borderRadius: sizes.borderRadius,
        },
        standardError: {
          backgroundColor: colors.error.main,
          borderRadius: sizes.borderRadius,
        },
        outlinedSuccess: {
          borderColor: colors.error.main,
          backgroundColor: alpha(colors.success.main, 0.1),
        },
        outlinedError: {
          borderRadius: sizes.borderRadius,
          backgroundColor: alpha(colors.error.main, 0.1),
          borderColor: colors.error.main,
        },
        outlinedInfo: {
          color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          borderColor: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          backgroundColor: alpha(
            mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
            0.1
          ),
        },
        filledSuccess: {
          borderColor: colors.success.main,
          backgroundColor: alpha(colors.success.main, 0.1),
        },
        filledError: {
          backgroundColor: alpha(colors.error.main, 0.1),
        },
        filledInfo: {
          color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          backgroundColor: alpha(
            mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
            0.1
          ),
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderRadius: sizes.borderRadius,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          fontSize: typography.link.fontSize,
          fontWeight: typography.link.fontWeight,
          color: colors.primary.dark,
          cursor: 'pointer',
          transition: 'color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            color: colors.primary.main,
          },
        },
      },
      variants: [
        {
          props: { variant: 'caption' },
          style: {
            fontSize: typography.caption.fontSize,
          },
        },
        {
          props: { color: 'secondary' },
          style: {
            color: colors.secondary.main,
            '&:hover': {
              color: colors.secondary.dark,
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
            backgroundColor: colors.primary.dark,
          },
        },
        {
          props: { variant: 'filled', color: 'warning' },
          style: {
            color: 'white',
            backgroundColor: colors.warning.main,
          },
        },
        {
          props: { variant: 'filled', color: 'error' },
          style: {
            color: 'white',
            backgroundColor: colors.error.main,
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
            borderColor: colors.primary.dark,
            color: colors.primary.dark,
            backgroundColor: alpha(colors.primary.light, 0.15),
          },
        },
        {
          props: { variant: 'outlined', color: 'warning' },
          style: {
            borderColor: colors.warning.main,
            color: colors.warning.main,
            backgroundColor: alpha(colors.warning.main, 0.15),
          },
        },
        {
          props: { variant: 'outlined', color: 'error' },
          style: {
            borderColor: colors.error.main,
            color: colors.error.main,
            backgroundColor: alpha(colors.error.main, 0.15),
          },
        },
      ],
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          ':has(.MuiBadge-colorPrimary)': {
            '.MuiBadge-badge': {
              color: 'white',
              fontWeight: 600,
            },
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          background: mode === 'dark' ? darkModePalette[0].background : lightModePalette[0].background,
          border: 'none',
          color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          '& .MuiDataGrid-withBorderColor': {
            borderColor: mode === 'dark' ? darkModePalette[0].grey300 : lightModePalette[0].grey300,
          },
          '& .MuiDataGrid-main': {
            border: `1px solid ${mode === 'dark' ? darkModePalette[0].grey300 : lightModePalette[0].grey300}`,
            borderRadius: sizes.borderRadius,
          },
          '& .MuiDataGrid-columnHeaders, .MuiDataGrid-pinnedColumnHeaders': {
            background: mode === 'dark' ? darkModePalette[0].grey100 : lightModePalette[0].grey100,
          },
          '& .MuiDataGrid-columnsContainer': {
            backgroundColor: mode === 'dark' ? darkModePalette[0].background : lightModePalette[0].background,
          },
          '& .MuiDataGrid-iconSeparator': {
            display: 'none',
          },
          '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
            borderRight: `1px solid ${mode === 'dark' ? darkModePalette[0].grey300 : lightModePalette[0].grey300}`,
          },
          '.MuiDataGrid-cell.actions': {
            borderRight: 'none',
          },
          '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
            borderBottom: `1px solid ${mode === 'dark' ? darkModePalette[0].grey300 : lightModePalette[0].grey300}`,
          },
          '& .MuiDataGrid-cell': {
            color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          },
          '& .MuiDataGrid-row': {
            '&:hover, &.Mui-hovered': {
              backgroundColor: `${alpha(
                mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
                0.05
              )} !important`,
            },
            '&--lastVisible': {
              '& .MuiDataGrid-cell': {
                borderBottom: 'none',
              },
            },
          },
          '& .MuiDataGrid-pinnedColumnHeaders': {
            '& .MuiDataGrid-columnHeader': {
              '&[data-field="actions"]': {
                borderRight: 'none !important',
              },
            },
          },
          '& .MuiDataGrid-cell--editing': {
            '& .MuiInputBase-root': {
              '&:has(.MuiSelect-select)': {
                height: '80%',
                maxWidth: '90%',
                margin: '0 auto',
              },
              '&:has(.MuiInputBase-input[type=date])': {
                maxWidth: '90%',
                margin: '0 auto',
              },
            },
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          borderRadius: sizes.borderRadius,
        },
      },
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
            backgroundColor: colors.primary.main,
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
            backgroundColor: colors.primary.main,
            color: mode === 'dark' ? darkModePalette[0].primaryText : lightModePalette[0].primaryText,
          },
          '&.Mui-disabled': {
            color: mode === 'dark' ? darkModePalette[0].grey300 : lightModePalette[0].grey300,
          },
        },
      },
    },
  },
});

// Create a styled version of the MaterialDesignContent component
export const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '.notistack-Snackbar': {
    borderRadius: sizes.borderRadius,
  },
  '&.notistack-MuiContent-success': {
    backgroundColor: colors.success.main,
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: colors.error.main,
  },
  '&.notistack-MuiContent-warning': {
    backgroundColor: colors.warning.main,
  },
}));
