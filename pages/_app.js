import "../styles/Home.module.css";
import "../styles/globals.css";
// import '../assets/font/SegoeUI.ttf'
import Script from "next/script";
import Head from "next/head";
import { wrapper, store } from "../pages/store/configStore";
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />

      <Script
        id="bootstrap-cdn"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      />
      <script src="js/jquery.js" />
      <script src="js/main.js"></script>
    </Provider>
  );
}

export default wrapper.withRedux(MyApp);
