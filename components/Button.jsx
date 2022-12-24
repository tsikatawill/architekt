import { styled } from "../stitches.config";

export const Button = ({ children, ...props }) => (
  <Wrapper {...props}>{children}</Wrapper>
);

const Wrapper = styled("button", {
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
});
