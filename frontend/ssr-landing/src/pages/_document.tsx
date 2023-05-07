import * as React from 'react';

import createEmotionServer from '@emotion/server/create-instance';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import createEmotionCache from '../MUI-config/createEmotionCache';
import theme from '../MUI-config/theme';

const { NEXT_PUBLIC_OPTIMIZE_ID } = process.env;

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {NEXT_PUBLIC_OPTIMIZE_ID && (
            <script async src={`https://www.googleoptimize.com/optimize.js?id=${NEXT_PUBLIC_OPTIMIZE_ID}`}></script>
          )}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="icon" href="favicon/favicon.ico" />
          <link rel="mask-icon" href="favicon/favicon.svg" />
          <link rel="apple-touch-icon" sizes="60x60" href="favicon/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="favicon/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="favicon/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="favicon/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="favicon/android-icon-192x192.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-128x128.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-152x152.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-167x167.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-180x180.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-192x192.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="favicon/favicon-196x196.png" />
          <link rel="manifest" href="manifest.json" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap"
            as="style"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App: any) => (props) => <App emotionCache={cache} {...props} />,
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), ...emotionStyleTags],
  };
};
