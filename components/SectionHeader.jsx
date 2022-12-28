import { motion } from "framer-motion";
import { styled } from "../stitches.config";

export const SectionHeader = styled(motion.h2, {
  fontSize: "$6",
  fontWeight: "$light",
  color: "$primaryLight",
  textTransform: "capitalize",
});
