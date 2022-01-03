import "../styles/globals.css";
// import "../styles/github-markdown.css";
import { ThemeProvider, useTheme } from "next-themes";
import { Navbar, NavbarProvider } from "../src/components/Navbar";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import React from "react";
import { isMobile } from "react-device-detect";

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
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <ThemeProvider attribute="class">
        {!isMobile && <Navbar />}
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default MyApp;
