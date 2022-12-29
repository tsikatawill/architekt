import { styled } from "../../stitches.config";

export const Textbox = styled("textarea", {
  background: "$lightGrey",
  border: "none",
  cursor: "pointer",
  fontSize: "$3",
  maxWidth: "100%",
  minHeight: 150,
  outline: "none",
  p: "$2",
  transition: "all 0.25s ease",
  width: "100%",
  font: "inherit",

  "&:focus": {
    outline: 0,
    background: "$primaryLight",
  },
});
