import React, { useContext } from 'react';

import TagManager from 'react-gtm-module';
import { useIntl } from 'react-intl';
import { Route, Routes } from 'react-router-dom';

import ProjectRoutes from './routes';

import { CssBaseline, PaletteMode } from '@mui/material';
import { enUS, esES, itIT } from '@mui/material/locale';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import './App.css';
import { CustomThemeOptions, getPaletteMode } from './configuration/material-ui/theme';
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

  React.useEffect(() => {
    document.body.setAttribute('data-theme', mode);
  }, [mode]);

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
