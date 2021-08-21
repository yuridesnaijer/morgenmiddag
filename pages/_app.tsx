import React from "react";
import ThemeContextProvider from "../components/themeContext/themeContext";
import GlobalStyle from "../styles/globalStyle";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />;
    </ThemeContextProvider>
  );
}
