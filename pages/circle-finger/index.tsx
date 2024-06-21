// pages/handtracker.js
import Head from "next/head";

// Import p5 dynamically to ensure it's not server-side rendered
import Sketch from "../../components/organisms/circle-finger/sketch";
import NavBar from "@/components/molecules/navbar";
import { useTheme } from "@/components/context/themeContext";
import { useState } from "react";

const socials = [
  [
    "instagram",
    "https://www.instagram.com/kvrishev/",
    "Shyngys Karishev Instagram",
  ],
  [
    "linkedin-alt",
    "https://www.linkedin.com/in/shyngys-karishev/",
    "Shyngys Karishev LinkedIn",
  ],
  ["telegram-alt", "https://t.me/karishev", "Shyngys Karishev Telegram"],
  ["github-alt", "https://www.github.com/karishev/", "Shyngys Karishev Github"],
  ["twitter-alt", "https://x.com/_karishev", "Shyngys Karishev Twitter"],
];

export default function HandTracker() {
  const { theme, toggleTheme } = useTheme();
  const [isFinger, setIsFinger] = useState(false);

  return (
    <div>
      <Head>
        <title>perfect circle!</title>
        <meta
          name="description"
          content="draw a perfect circle with your finger or nose!"
        />
      </Head>
      <main>
        <NavBar
          withoutProjects={true}
          toggleObject={() => setIsFinger(!isFinger)}
          isFinger={isFinger}
        />
        <Sketch key={String(isFinger)} isFinger={isFinger} />
        <div className="right">
          <button className="theme_button" onClick={toggleTheme}>
            <svg
              width="60"
              height="60"
              viewBox="0 0 60 60"
              className="circle-svg"
            >
              <circle
                cx="30"
                cy="30"
                r="28"
                fill="transparent"
                stroke="var(--txtClr)"
                strokeWidth="2"
                strokeDasharray="5,10"
              />
            </svg>
            <i className={`uil uil-${theme === "light" ? "moon" : "sun"}`}></i>
          </button>
        </div>
        <div className="left">
          <ul className={"main__socials"}>
            {socials.map((name, index) => {
              return (
                <li key={index}>
                  <a target={"_blank"} aria-label={name[2]} href={name[1]}>
                    <i className={`uil uil-${name[0]}`}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}
