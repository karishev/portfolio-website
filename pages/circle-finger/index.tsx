// pages/handtracker.js
import Head from "next/head";

// Import p5 dynamically to ensure it's not server-side rendered
import Sketch from "../../components/organisms/circle-finger/sketch";
import NavBar from "@/components/molecules/navbar";

export default function HandTracker() {
  return (
    <div>
      <Head>
        <title>circle finger!</title>
        <meta
          name="description"
          content="draw a perfect circle with your finger!"
        />
      </Head>
      <main>
        <NavBar withoutProjects={true} />
        <Sketch />
      </main>
    </div>
  );
}
