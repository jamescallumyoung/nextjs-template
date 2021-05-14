import type { AppProps } from 'next/app';

import '../styles/globals.css';
import 'rsuite/lib/styles/index.less';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}
export default MyApp;
