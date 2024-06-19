// components/ApplyTheme.tsx
import { useEffect } from "react";
import { useTheme } from "@/components/context/themeContext";

export const ApplyTheme = () => {
  const { theme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    const themeColors = {
      dark: {
        "--bgClr": "#0d0d0d",
        "--txtClr": "#d4d4d4",
        "--btnClr": "#ffaf00",
        "--highlight": "#291c00",
        "--hClr": "#ebebec",
        "--cardClr": "#243264",
        "--lineClr": "#393639",
        "--backClr": "#291c00",
      },
      light: {
        "--bgClr": "#faf8f8",
        "--txtClr": "#4e4e4e",
        "--btnClr": "#ffaf00",
        "--highlight": "#ffedcc",
        "--hClr": "#2b2b2b",
        "--cardClr": "#faf8f8",
        "--lineClr": "#e5e5e5",
        "--backClr": "#ffedcc",
      },
    };
    (
      Object.keys(themeColors[theme]) as Array<keyof typeof themeColors.dark>
    ).forEach((key) => {
      root.style.setProperty(key, themeColors[theme][key]);
    });
  }, [theme]);

  return null; // This component does not render anything
};
