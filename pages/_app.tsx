import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>WindroseMC</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="WindroseMC is a new semi-vanilla Minecraft server that just launched. We're a small, friendly community with a focus on building and exploration. Come check us out and see what WindroseMC is all about!"
        />
        <meta
          name="keywords"
          content="Minecraft, semi-vanilla, server, WindroseMC, building, exploration"
        />
        <meta
          name="author"
          content="ShaanCoding | https://github.com/ShaanCoding/"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
