import "../styles/globals.css";
import { ThemeProvider, useTheme } from "next-themes";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import React from "react";

function MyApp({ Component, pageProps }) {
  const { setTheme } = useTheme();
  setTheme("dark");

  const SEO = {
    ...(pageProps.seo != null ? { ...pageProps.seo } : {}),
  };

  return (
    <React.Fragment>
      <DefaultSeo {...SEO} />
      <Head>
        <link
          rel="icon"
          href="/images/pixil-frame-0.png"
          type="image/png"
        ></link>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
