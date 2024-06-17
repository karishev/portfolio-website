import Head from "next/head";
import { useCallback, useContext, useRef } from "react";
import StyleContext from "@/components/context/styleContext";
import ScrollContext from "@/components/context/scrollContext";
import NavBar from "@/components/molecules/navbar";
import Hero from "@/components/organisms/hero";
import About from "@/components/organisms/about";
import Experience from "@/components/organisms/experience";
import Projects from "@/components/organisms/projects";

// import dynamic from "next/dynamic";

// const NavBar = dynamic(() => import("@/components/molecules/navbar"), {
//   ssr: false,
// });
// const Hero = dynamic(() => import("@/components/organisms/hero"), {
//   ssr: false,
// });
// const About = dynamic(() => import("@/components/organisms/about"), {
//   ssr: false,
// });
// const Experience = dynamic(() => import("@/components/organisms/experience"), {
//   ssr: false,
// });
// const Projects = dynamic(() => import("@/components/organisms/projects"), {
//   ssr: false,
// });

export default function Home() {
  const { menuOpen } = useContext(StyleContext);
  const heroRef = useRef<HTMLElement>(null);

  const expRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);

  const handleClick = useCallback((target: string) => {
    let ref;

    switch (target) {
      case "hero":
        ref = heroRef;
        break;
      case "experience":
        ref = expRef;
        break;
      case "projects":
        ref = projectsRef;
        break;
      case "about":
        ref = aboutRef;
        break;
      default:
        break;
    }

    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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
    [
      "github-alt",
      "https://www.github.com/karishev/",
      "Shyngys Karishev Github",
    ],
    ["twitter-alt", "https://x.com/_karishev", "Shyngys Karishev Twitter"],
  ];

  return (
    <>
      <Head>
        <title>Shyngys Karishev</title>
        <meta
          name="description"
          content="Discover my skills, experience, and creativity through my portfolio website. Explore my projects and achievements as a Software Developer, and let's collaborate."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScrollContext.Provider value={{ handleClick }}>
        <main className={menuOpen ? "blur" : ""}>
          <NavBar />

          <Hero ref={heroRef} />
          <About ref={aboutRef} />
          <Experience ref={expRef} />
          <Projects ref={projectsRef} />
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
      </ScrollContext.Provider>
    </>
  );
}
