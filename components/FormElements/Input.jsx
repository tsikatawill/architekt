import { styled } from "../../stitches.config";

export const Input = styled("input", {
  background: "$lightGrey",
  border: "none",
  cursor: "pointer",
  fontSize: "$4",
  height: 40,
  margin: 0,
  outline: "none",
  px: "$2",
  transition: "all 0.25s ease",
  width: "100%",

  "&:focus": {
    outline: 0,
    background: "$primaryLight",
  },
});
