import "../../styles/global.scss";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AuthProvider } from "@/contexts/AuthContent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />;
      <ToastContainer autoClose={4000} theme={"dark"} />
    </AuthProvider>
  );
}
