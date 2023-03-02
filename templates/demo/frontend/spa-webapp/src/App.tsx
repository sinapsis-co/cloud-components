import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProjectRoutes from './routes';
import React from 'react';
import { LocalizeContextProps, Translate, withLocalize } from 'react-localize-redux';
import EnglishTranslation from './translations/en.json';
import { renderToStaticMarkup } from 'react-dom/server';
import { Button, createTheme, CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import CustomThemeOptions, { getPaletteMode } from './configuration/material-ui/theme';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const ColorModeContext = React.createContext({
  toggleColorMode: () => {
    // This is intentional
  },
});

const App: React.FunctionComponent<LocalizeContextProps> = ({ initialize, addTranslationForLanguage }): JSX.Element => {
  React.useEffect(() => {
    initialize({
      languages: [{ name: 'English', code: 'en' }],
      options: { renderToStaticMarkup, renderInnerHtml: true, defaultLanguage: 'en', onMissingTranslation: () => '' },
    });
    addTranslationForLanguage(EnglishTranslation, 'en');
  }, []);

  const [mode, setMode] = React.useState<PaletteMode>('dark');
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme({ ...CustomThemeOptions, ...getPaletteMode(mode) }), [mode]);

  return (
    <div className="App">
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Button variant="contained" onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
            <Translate id="Common.Toggle" />{' '}
            {mode === 'light' ? <Brightness4Icon sx={{ ml: 1 }} /> : <Brightness7Icon sx={{ ml: 1 }} />}
          </Button>
          <Routes>
            {ProjectRoutes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component as React.ReactNode} />
            ))}
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </div>
  );
};

export default withLocalize(App);
