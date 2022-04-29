import '../styles/globals.css';
import '../loader.js';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';
import ProviderData from '../context/ProviderData';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <ProviderData>
          <Component {...pageProps} />
        </ProviderData>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
