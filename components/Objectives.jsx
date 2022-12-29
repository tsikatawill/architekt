import { propY, sideSlide } from "../motions";

import { Container } from "./Container";
import { SectionHeader } from "./SectionHeader";
import { motion } from "framer-motion";
import { styled } from "../stitches.config";

export const Objectives = () => {
  return (
    <section>
      <Container>
        <SectionHeader>Our objectives</SectionHeader>
        <Inner>
          <ObjectiveCard>
            <Number variants={propY()} initial="initial" whileInView="animate">
              1
            </Number>
            <ObjectiveText
              variants={sideSlide("left", 1)}
              initial="initial"
              animate="animate"
            >
              To foster an enjoyable atmosphere for our clients, we strive to
              create comfortable conditions and continuously work towards
              improving the quality of customer service that we offer.
            </ObjectiveText>
          </ObjectiveCard>
          <ObjectiveCard>
            <Number variants={propY()} initial="initial" whileInView="animate">
              2
            </Number>
            <ObjectiveText
              variants={sideSlide()}
              initial="initial"
              animate="animate"
            >
              Constantly improve the quality of services provided by training
              staff, purchasing new equipment and increased advertising in the
              market.
            </ObjectiveText>
          </ObjectiveCard>
        </Inner>
      </Container>
    </section>
  );
};

const Inner = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  gap: "$4",
  flexDirection: "column",

  "@sm": {
    flexDirection: "row",
  },
});

const ObjectiveCard = styled("div", {
  flex: 1,
  flexShrink: 0,
  maxWidth: 550,
  display: "flex",
  gap: "$2",
  alignItems: "center",
});

const Number = styled(motion.p, {
  fontWeight: 900,
  fontSize: 200,
  color: "$lightGrey",
});

const ObjectiveText = styled(motion.p, {
  fontWeight: "$medium",
  fontSize: "$4",
  lineHeight: "36px",
});
