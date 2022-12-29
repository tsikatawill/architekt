import { styled } from "../stitches.config";

export const PageHeader = ({ title = "Page title" }) => {
  return (
    <Wrapper>
      <Top>{title.split(" ")[0]}</Top>
      <Bottom>{title.split(" ")[1]}</Bottom>
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

const Top = styled("span", {
  display: "block",
  color: "$primaryLight",
  fontWeight: "$light",
});

const Bottom = styled("span", {
  display: "block",
  color: "$primary",
  fontWeight: "$bolder",
});
