import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style global jsx>{`
        :root {
          --main-color: #488cff;
        }

        body {
          background-color: gray;
        }
      `}</style>
    </>
  );
}

export default MyApp;
