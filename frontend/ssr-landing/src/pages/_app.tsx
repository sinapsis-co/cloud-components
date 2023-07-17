import type { AppProps } from 'next/app';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { CacheProvider, EmotionCache, Theme } from '@emotion/react';
import { CustomThemeOptions, getPaletteMode } from '@frontend/MUI-config/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import createEmotionCache from '../MUI-config/createEmotionCache';

import TagManager from 'react-gtm-module';

import { IntlProvider } from 'react-intl';
import Italian from '../content/locales/it.json';

import '../styles/global.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const tagManagerArgs = {
  gtmId: process.env.NEXT_APP_GOOGLE_GTM || '',
};

function MyApp(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { locale } = useRouter();

  /*------------------------------- LANGUAGE CONFIGS -------------------------------/*/

  const [shortLocale] = locale ? locale.split('-') : ['it'];

  const messages = React.useMemo(() => {
    return Italian;
  }, [shortLocale]);

  /*-----------------------------------------------------------------------------/*/

  /*------------------------------- THEME CONFIGS -------------------------------/*/

  const [theme] = React.useState<Theme>(createTheme({ ...CustomThemeOptions('light'), ...getPaletteMode('light') }));

  /*-----------------------------------------------------------------------------/*/

  /*------------------------------- TAG MANAGER -------------------------------/*/

  useEffect(() => {
    TagManager.initialize(tagManagerArgs);

    const handleHashChange = () => {
      if (location.hash) {
        const element = document.querySelector(`#scroll-${location.hash.slice(1)}`);

        if (element) {
          const rect = element.getBoundingClientRect();
          window.scrollTo({
            top: window.scrollY + rect.top - 120,
            behavior: 'smooth',
          });
        }
      }
    };

    Router.events.on('hashChangeComplete', handleHashChange);
    Router.events.on('routeChangeComplete', handleHashChange);

    return () => {
      Router.events.off('hashChangeComplete', handleHashChange);
      Router.events.off('routeChangeComplete', handleHashChange);
    };
  }, []);

  /*-----------------------------------------------------------------------------/*/

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#65d872" />
        <meta
          name="description"
          content="Reedy offre agli studenti un computer attraverso un servizio accessibile, flessibile ed ecosostenibile.
  Il miglior computer per i tuoi bisogni, senza fare investimenti, ad un costo mensile basso."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@reedy_it" />
        <meta name="twitter:creator" content="@reedy_it" />
        <meta name="twitter:title" content="reedy.it" />
        <meta
          name="twitter:description"
          content="Reedy offre agli studenti un computer attraverso un servizio accessibile, flessibile ed ecosostenibile.
  Il miglior computer per i tuoi bisogni, senza fare investimenti, ad un costo mensile basso."
        />
        <meta name="twitter:image" content="/image/tw.jpg" />
        <meta property="og:url" content="https://reedy.it/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="reedy.it" />
        <meta
          property="og:description"
          content="Reedy offre agli studenti un computer attraverso un servizio accessibile, flessibile ed ecosostenibile.
  Il miglior computer per i tuoi bisogni, senza fare investimenti, ad un costo mensile basso."
        />
        <meta property="og:image" content="/image/fb.jpg" />
        <meta property="og:title" content="reedy.it" />
        <meta property="og:image" content="/image/og.jpg" />
        <meta
          name="description"
          content="Reedy offre agli studenti un computer attraverso un servizio accessibile, flessibile ed ecosostenibile.
  Il miglior computer per i tuoi bisogni, senza fare investimenti, ad un costo mensile basso."
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <IntlProvider locale={shortLocale} messages={messages} defaultLocale="it-IT" onError={() => null}>
          <Component {...pageProps} />
        </IntlProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
