import { About } from "../components/About";
import { Container } from "../components/Container";
import Head from "next/head";
import { Hero } from "../components/Hero";
import { Objectives } from "../components/Objectives";

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
      </header>
    </>
  );
}
