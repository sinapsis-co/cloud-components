import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const { NEXT_PUBLIC_OPTIMIZE_ID } = process.env;

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<{
    styles: JSX.Element;
    html: string;
    head?: (JSX.Element | null)[] | undefined;
  }> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head>
          {NEXT_PUBLIC_OPTIMIZE_ID && (
            <script async src={`https://www.googleoptimize.com/optimize.js?id=${NEXT_PUBLIC_OPTIMIZE_ID}`}></script>
          )}
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
