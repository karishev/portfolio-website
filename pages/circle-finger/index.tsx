// pages/handtracker.js
import Head from "next/head";

// Import p5 dynamically to ensure it's not server-side rendered
import Sketch from "../../components/organisms/circle-finger/sketch";

export default function HandTracker() {
  return (
    <div>
      <Head>
        <title>Multi-Hand Tracking</title>
      </Head>
      <main>
        <Sketch />
      </main>
    </div>
  );
}
