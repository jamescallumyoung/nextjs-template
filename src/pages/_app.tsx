import type { AppProps } from 'next/app';

import '../styles/globals.css';
import 'rsuite/dist/styles/rsuite-default.min.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}
export default MyApp;
