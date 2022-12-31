import { motion } from "framer-motion";
import { sideSlide } from "../motions";
import { styled } from "../stitches.config";

export const PageHeader = ({ title = "Page title" }) => {
  return (
    <Wrapper>
      <Top variants={sideSlide()} initial="initial" whileInView="animate">
        {title.split(" ")[0]}
      </Top>
      <Bottom
        variants={sideSlide("right")}
        initial="initial"
        whileInView="animate"
      >
        {title.split(" ")[1]}
      </Bottom>
    </Wrapper>
  );
};

const Wrapper = styled("h1", {
  lineHeight: 1,
  py: 20,
  fontSize: "$6",
  gap: "$2",
  textTransform: "uppercase",

  "@sm": {
    fontSize: "clamp($4, 5vw, $6)",
  },
});

const Top = styled(motion.span, {
  display: "block",
  color: "$primaryLight",
  fontWeight: "$light",
});

const Bottom = styled(motion.span, {
  display: "block",
  color: "$primary",
  fontWeight: "$bolder",
});
