import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content="#db2777" />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>

      <body className="bg-zinc-950 text-zinc-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
