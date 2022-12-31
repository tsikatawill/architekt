import { Button } from "./Button";
import { styled } from "../stitches.config";

export const ButtonImage = ({ text, icon, ...rest }) => {
  return (
    <StyledButton {...rest}>
      {text}
      {icon}
    </StyledButton>
  );
};

const StyledButton = styled(Button, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
});
