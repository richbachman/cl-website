import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <link
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎷</text></svg>"
            rel="icon"
          />
          <link
            rel="preconnect"
            href="https://assets.twilio.com"
            crossOrigin=""
          />
          <link
            rel="stylesheet"
            href="https://assets.twilio.com/public_assets/paste-fonts/main-1.2.0/fonts.css"
          />
          <link
            crossOrigin=""
            href="https://www.google-analytics.com"
            rel="preconnect"
          />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-HYFJV86D1F"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-HYFJV86D1F');
              `,
            }}
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

export default MyDocument;
