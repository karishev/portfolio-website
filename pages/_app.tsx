import "@/styles/globals.css";
import type { AppProps } from "next/app";
import StyleContext from "@/components/context/styleContext";
import { useState } from "react";
import { ThemeProvider } from "@/components/context/themeContext";
import { ApplyTheme } from "@/components/atoms/applyTheme";
import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <StyleContext.Provider value={{ menuOpen, setMenuOpen }}>
      <ThemeProvider>
        <Analytics />
        <ApplyTheme />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyleContext.Provider>
  );
}
