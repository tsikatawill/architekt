import { click } from "../motions";
import { motion } from "framer-motion";
import { styled } from "../stitches.config";

export const NavigationButton = ({ children, ...rest }) => {
  return (
    <Wrapper {...rest} variants={click} initial="initial" whileTap="animate">
      {children}
    </Wrapper>
  );
};

const Wrapper = styled(motion.button, {
  border: "1px solid $primaryLight",
  background: "none",
  height: 50,
  width: 50,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$primaryLight",
  transition: "all 0.2s ease",
  fontSize: 20,
  cursor: "pointer",

  "&:hover": {
    color: "$primary",
    border: "1px solid $primary",
  },
});
