import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StyleContext from "@/components/context/styleContext";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <StyleContext.Provider value={{ menuOpen, setMenuOpen }}>
      <Component {...pageProps} />;
    </StyleContext.Provider>
  );
}
