import { propUp, propY } from "../motions";

import { motion } from "framer-motion";
import { styled } from "../stitches.config";

export const SectionHeader = ({ children, ...rest }) => (
  <Wrapper {...rest} variants={propUp} initial="initial" whileInView="animate">
    {children}
  </Wrapper>
);

const Wrapper = styled(motion.h2, {
  fontSize: "$6",
  fontWeight: "$light",
  color: "$primaryLight",
  textTransform: "capitalize",
  fontSize: "40px",

  "@sm": {
    fontSize: "clamp(40px, 6vw, $6)",
  },
});
