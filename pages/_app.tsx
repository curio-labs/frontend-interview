import "../styles/globals.css";
import type { AppProps } from "next/app";
import Apollo from "../components/Apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Apollo>
      <Component {...pageProps} />
    </Apollo>
  );
}

export default MyApp;
