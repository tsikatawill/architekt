import { motion } from "framer-motion";
import { styled } from "../stitches.config";

export const SectionHeader = styled(motion.h2, {
  fontWeight: "$light",
  color: "$primaryLight",
  textTransform: "capitalize",
  fontSize: "40px",

  "@sm": {
    fontSize: "clamp(40px, 6vw, $6)",
  },
});
