import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  // return <Component {...pageProps} />;
  return (
    <>
      <Head>
        <title>Prachi Gupta</title>
        <meta name="description" content="This is the default description for your website" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
