import "../styles/globals.css";
import "normalize.css/normalize.css";
import "@celo-tools/use-contractkit/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";

import { Global, ThemeProvider } from "@emotion/react";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { Web3ReactProvider } from "@web3-react/core";
import { providers } from "ethers";
import { AppProps } from "next/app";
import React from "react";
import Modal from "react-modal";
import { ToastContainer } from "react-toastify";

import { globalStyles } from "../components/layouts/globalStyles";
import { MainLayout } from "../components/layouts/MainLayout";
import theme from "../theme";

Sentry.init({
  dsn: "https://94b8b8dc0ab64d3d8c8f42c749c46a00@o676708.ingest.sentry.io/6024423",
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 0.01,
});
function getLibrary(ethereum: any) {
  return new providers.Web3Provider(ethereum);
}

const RomulusApp: React.FC<AppProps> = ({ Component }: AppProps) => {
  Modal.setAppElement("body");
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        <MainLayout>
          <Component />
        </MainLayout>
        <ToastContainer />
      </ThemeProvider>
    </Web3ReactProvider>
  );
};

export default RomulusApp;
