import "../styles/globals.scss";
import "../styles/app.scss";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { ParallaxProvider } from "react-scroll-parallax";

import type { AppProps } from "next/app";

import Head from "../src/components/layout/Head";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <>
          {/* <Script
            // src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          /> */}
          {/* <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            `}
          </Script> */}
        </>
      )}
      <Head title={pathname} />
      <ParallaxProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </ParallaxProvider>
    </>
  );
}

export default MyApp;
