import Head from "next/head";
import Image from "next/image";
import NavBar from "@/components/molecules/navbar";
import { useContext } from "react";
import StyleContext from "@/components/context/styleContext";
import { Hero } from "@/components/organisms/hero";
import { About } from "@/components/organisms/about";

export default function Home() {
  const { menuOpen, setMenuOpen } = useContext(StyleContext);
  return (
    <>
      <Head>
        <title>Shyngys Karishev</title>
        <meta
          name="description"
          content="Shyngys Karishev's developer portfolio website showcases his skills, projects, and experience as a software developer. It features his background, areas of expertise, and a collection of his projects, highlighting his creativity and problem-solving abilities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={menuOpen ? "blur" : ""}>
        <NavBar />
        <Hero />
        <About />
      </main>
    </>
  );
}
