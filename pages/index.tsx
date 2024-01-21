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
  const aboutRef = useRef<HTMLElement>(null);
  const expRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  const handleClick = useCallback((target: string) => {
    let ref;

    switch (target) {
      case "hero":
        ref = heroRef;
        break;
      case "about":
        ref = aboutRef;
        break;
      case "experience":
        ref = expRef;
        break;
      case "projects":
        ref = projectsRef;
        break;
      default:
        break;
    }

    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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
        </main>
      </ScrollContext.Provider>
    </>
  );
}
