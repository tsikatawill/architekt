import { Container } from "./Container";
import Link from "next/link";
import { styled } from "../stitches.config";

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Inner>
          <div>
            <h1>Architekt</h1>
            <small>
              <em>Showcase website for architectural pieces</em>
            </small>
          </div>
          <div>
            <GroupHeader>Information</GroupHeader>

            <Links>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/certificates">Certificates</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </Links>
          </div>
          <div>
            <GroupHeader>Contact</GroupHeader>
          </div>
          <div>
            <GroupHeader>Social media</GroupHeader>
          </div>
        </Inner>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled("footer", {
  py: "$5",
  background: "$primary",
  color: "White",
});

const Inner = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "$4",
  fontSize: "14px",
});

const GroupHeader = styled("h3", {
  fontSize: "$2",
  fontWeight: "$bolder",
  textTransform: "capitalize",
  marginBottom: "$3",
});

const Links = styled("ul", {
  margin: 0,
  listStyle: "none",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});
