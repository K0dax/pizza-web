import "../../styles/global.scss";
import type { AppProps } from "next/app";

import { AuthProvider } from "@/contexts/AuthContent";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />;
    </AuthProvider>
  );
}
