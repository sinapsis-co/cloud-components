import { ThemeOptions } from '@mui/material/styles/createTheme';
import { alpha } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { PaletteMode } from '@mui/material';

export const getPaletteMode = (mode: PaletteMode): Partial<ThemeOptions> => ({
  palette: {
    mode,
    ...(mode === 'dark'
      ? {
          primary: {
            main: '#39FF14',
            dark: '#28EE03',
            light: '#FFFF14',
            contrastText: '#131313',
          },
          secondary: {
            main: '#2D99FF',
          },
          text: {
            primary: '#ffffff',
            secondary: '#637381',
          },
          grey: {
            300: '#E5E7EB',
          },
          success: {
            main: '#47B247',
          },
          error: {
            main: '#FF4842',
          },
          background: {
            default: '#131313',
          },
          action: {
            hover: `${alpha('#04BF8a', 0.15)}`,
          },
        }
      : {
          primary: {
            main: '#FF69B4',
            dark: '#DD4792',
            light: '#FFFFF6',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#2D99FF',
          },
          text: {
            primary: '#637381',
            secondary: '#212B36',
          },
          grey: {
            300: '#E5E7EB',
          },
          success: {
            main: '#47B247',
          },
          error: {
            main: '#FF4842',
          },
          background: {
            default: '#F9FAFB',
          },
          action: {
            hover: `${alpha('#04BF8a', 0.15)}`,
          },
        }),
  },
});

const CustomThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: ['Inter', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: '700',
          textTransform: 'capitalize',
          borderRadius: '8px',
          padding: '8px 16px',
        },
      },
      variants: [
        {
          props: { variant: 'outlined', color: 'primary' },
          style: {
            boxShadow: 'none',
            borderWidth: 1,
            '&:hover': {
              backgroundColor: 'rgba(0, 171, 85, 0.24)',
              boxShadow: 'none',
            },
          },
        },
        {
          props: { variant: 'contained', color: 'primary' },
          style: {
            boxShadow: '0px 8px 16px rgba(0, 171, 85, 0.24)',
          },
        },
        {
          props: { variant: 'contained', color: 'error' },
          style: {
            boxShadow: `0px 8px 16px ${alpha(red[500], 0.24)}`,
          },
        },
        {
          props: { size: 'small' },
          style: {
            padding: '8px',
          },
        },
      ],
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          WebkitBoxShadow: '0 0 0 1000px white inset',
          borderRadius: '16px',
          transition: 'border 250ms ease-in',
        },
        notchedOutline: {
          border: '1px solid #E5E7EB',
          borderRadius: '16px',
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
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: '16px',
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px white inset',
          },
        },
        input: {
          borderRadius: '16px',
          '&:-webkit-autofill': {
            WebkitBoxShadow: '0 0 0 1000px white inset',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          background: 'transparent',
          borderRadius: '16px',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '13px',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h4: {
          fontSize: '2rem',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: alpha('#04BF8a', 0.08),
            color: '#04BF8a',
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
        },
        action: {
          padding: '4px 0',
        },
        standardSuccess: {
          color: '#04BF8a',
          backgroundColor: '#04BF8a',
          borderRadius: '8px',
          '.MuiAlert-icon': {
            color: '#ffffff',
          },
        },
        outlinedSuccess: {
          color: '#097f4a',
          borderColor: '#04BF8a',
          backgroundColor: '#E1F7F1',
          borderRadius: '8px',
          '.MuiAlert-icon': {
            color: '#04BF8a',
          },
        },
        outlinedError: {
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          '.MuiAlert-icon': {
            color: '#d32f2f',
          },
        },
        outlinedInfo: {
          color: '#097f4a',
          borderColor: '#04BF8a',
          backgroundColor: '#E1F7F1',
          borderRadius: '8px',
          '.MuiAlert-icon': {
            color: '#04BF8a',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: `0px 1px 2px ${alpha('#1F2937', 0.08)}`,
          borderRadius: '4px',
        },
      },
    },
  },
};

export default CustomThemeOptions;
