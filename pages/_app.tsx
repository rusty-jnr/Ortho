import "../styles/globals.css";
import "antd/dist/antd.css";
import "../public/Fonts/font.css";
import "react-multi-carousel/lib/styles.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { reduxstore } from "store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={reduxstore}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
