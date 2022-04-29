import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class _Document extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            rel="preload"
            href="/fonts/Gibson-BoldItalic/Gibson-BoldItalic.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/Gibson-Regular/Gibson-Regular.woff"
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link rel="shortcut icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
