import '../styles/globals.css';
import '../styles/variables.css';
import '../styles/buttons.scss';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
