import { motion } from "framer-motion";
import { styled } from "../stitches.config";

export const Button = ({ children, ...props }) => (
  <Wrapper
    {...props}
    initial={{ scale: 1 }}
    whileTap={{ scale: 0.95, transition: { duration: 0.05 } }}
  >
    {children}
  </Wrapper>
);

const Wrapper = styled(motion.button, {
  background: "$primary",
  border: "none",
  color: "White",
  cursor: "pointer",
  fontWeight: "$medium",
  height: 50,
  minWidth: 200,
  transition: "all 0.15s ease",

  "&:hover": {
    background: "$primaryHover",
  },

  variants: {
    bg: {
      white: {
        background: "White",
        color: "$primary",

        "&:hover": {
          background: "$lightGrey",
        },
      },
    },
  },
});
