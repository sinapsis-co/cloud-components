import Head from 'next/head';
import Router from 'next/router';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../MUI-config/theme';
import createEmotionCache from '../MUI-config/createEmotionCache';

import { useEffect } from 'react';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  useEffect(() => {
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

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="favicon/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ED3438" />
        <meta
          name="description"
          content="We empower independent artists with the tools needed to launch &amp; grow their career."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@tracco" />
        <meta name="twitter:creator" content="@tracco" />
        <meta name="twitter:title" content="trac.co" />
        <meta
          name="twitter:description"
          content="We empower independent artists with the tools needed to launch &amp; grow their career."
        />
        <meta name="twitter:image" content="/images/tw.jpg" />
        <meta property="og:url" content="https://trac.co/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="trac.co" />
        <meta
          property="og:description"
          content="We empower independent artists with the tools needed to launch &amp; grow their career."
        />
        <meta property="og:image" content="/images/fb.jpg" />
        <meta property="og:title" content="trac.co" />
        <meta property="og:image" content="/images/og.jpg" />
        <meta
          name="description"
          content="We empower independent artists with the tools needed to launch &amp; grow their career."
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
