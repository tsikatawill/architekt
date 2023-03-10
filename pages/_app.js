import "../styles/globals.css";

import { AnimatePresence, motion } from "framer-motion";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { styled } from "../stitches.config";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Outer>
      <Navbar />
      <AnimatePresence mode="wait">
        <Wrapper
          key={router.route}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0, transition: { duration: 0.5 } },
          }}
        >
          <Component {...pageProps} />
        </Wrapper>
      </AnimatePresence>
      <Footer />
    </Outer>
  );
}

const Outer = styled("div", {
  minHeight: "100vh",
  display: "grid",
  gridTemplateRows: "auto 1fr auto",
});

const Wrapper = styled(motion.div);
