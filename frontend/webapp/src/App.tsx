import React, { useContext } from 'react';

import TagManager from 'react-gtm-module';
import { useIntl } from 'react-intl';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { CssBaseline, PaletteMode } from '@mui/material';
import { enUS, esES, itIT } from '@mui/material/locale';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import { CustomThemeOptions, getPaletteMode } from './configuration/material-ui/theme';
import ProjectRoutes from './routes';
import { ColorModeContext } from './context';

const tagManagerArgs = {
  gtmId: import.meta.env.VITE_APP_GTM_ID || '',
};

import.meta.env.VITE_APP_STAGE === 'prod' && TagManager.initialize(tagManagerArgs);

const App: React.FunctionComponent = (): JSX.Element => {
  const intl = useIntl();

  const getLocale = () => {
    switch (intl.locale) {
      case 'it':
        return itIT;
      case 'en':
        return enUS;
      case 'es':
        return esES;
      default:
        return enUS;
    }
  };

  const [mode, setMode] = React.useState<PaletteMode>(useContext(ColorModeContext).initialMode);

  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      initialMode: mode,
      toggleColorMode: () => {
        setMode((themeMode: PaletteMode) => (themeMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(
    () => createTheme({ ...CustomThemeOptions(mode), ...getPaletteMode(mode) }, getLocale()),
    [mode]
  );

  const location = useLocation();

  const hasDarkBackground = React.useMemo(() => {
    const darkBackgroundRoutes = ['/dashboard'];
    return darkBackgroundRoutes.some((route) => location.pathname.startsWith(route));
  }, [location.pathname]);

  // This effect sets the background color of the document body to the default background color or to grey[100] if the background is dark.
  React.useEffect(() => {
    const backgroundColor = hasDarkBackground ? theme.palette.grey[100] : theme.palette.background.default;
    document.body.style.backgroundColor = backgroundColor;
  }, [hasDarkBackground, theme.palette.background.default, theme.palette.grey[100]]);

  return (
    <main className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            {ProjectRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component as React.ReactNode} />
            ))}
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </main>
  );
};

export default App;
