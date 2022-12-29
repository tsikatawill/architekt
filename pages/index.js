import { About } from "../components/About";
import { Contact } from "../components/Contact";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { Objectives } from "../components/Objectives";
import { Projects } from "../components/Projects";
import { styled } from "../stitches.config";

export default function Home() {
  return (
    <>
      <Head>
        <title>Architekt</title>
        <meta name="description" content="Showcase of architectural pieces" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Hero />
        {/* <About /> */}
        <Objectives />
        <Projects />
        <Contact />
      </header>
    </>
  );
}
