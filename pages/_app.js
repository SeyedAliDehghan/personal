import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import './project.css'

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
