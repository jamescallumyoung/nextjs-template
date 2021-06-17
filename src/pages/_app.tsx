import React from "react";
import { AppProps } from "next/app";

import "../styles/globals.css";
import "rsuite/dist/styles/rsuite-default.min.css";
import "tailwindcss/tailwind.css";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
export default MyApp;
