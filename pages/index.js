import { Container } from "../components/Container";
import Head from "next/head";

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
        <Container>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus eius
            perferendis recusandae dicta alias ut. Libero esse inventore
            provident delectus amet pariatur laborum neque, placeat, quam sit
            magni eos quae!
          </p>
        </Container>
      </header>
    </>
  );
}
