import {
  FaFacebookF,
  FaLinkedin,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

import { Container } from "./Container";
import Link from "next/link";
import { styled } from "../stitches.config";

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Inner>
          <FooterGroup>
            <h1>Architekt</h1>
            <small>
              <em>Showcase website for architectural pieces</em>
            </small>
          </FooterGroup>
          <FooterGroup>
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
          </FooterGroup>
          <FooterGroup>
            <GroupHeader>Contact</GroupHeader>

            <ContactItem>
              <HiOutlineLocationMarker size={30} />
              <span>
                100, Republic of Kazakhstan, d. Karaganda, st. Television 10
              </span>
            </ContactItem>
            <ContactItem>
              <HiOutlinePhone size={20} />
              <span>+7 (701) 77 76 811</span>
            </ContactItem>
            <ContactItem>
              <HiOutlineMail size={20} />
              <span>somemail@provider.com</span>
            </ContactItem>
          </FooterGroup>
          <FooterGroup>
            <GroupHeader>Social media</GroupHeader>

            <Socials>
              <Link href={"https://www.facebook.com"} legacyBehavior passHref>
                <a target="_blank" referrerPolicy="no-referrer">
                  <FaFacebookF />
                </a>
              </Link>
              <Link href={"https://www.twitter.com"} legacyBehavior passHref>
                <a target="_blank" referrerPolicy="no-referrer">
                  <FaTwitter />
                </a>
              </Link>
              <Link href={"https://www.linkedin.com"} legacyBehavior passHref>
                <a target="_blank" referrerPolicy="no-referrer">
                  <FaLinkedin />
                </a>
              </Link>
              <Link href={"https://www.pinterest.com"} legacyBehavior passHref>
                <a target="_blank" referrerPolicy="no-referrer">
                  <FaPinterestP />
                </a>
              </Link>
            </Socials>
          </FooterGroup>
        </Inner>

        <Center>
          Developed by{" "}
          <Link
            href={"https://www.twitter.com/dev_willman"}
            legacyBehavior
            passHref
          >
            <StyledLink target="_blank" referrerPolicy="no-referrer">
              William M. Tsikata
            </StyledLink>
          </Link>
        </Center>
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
  gap: "$5",
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

const ContactItem = styled("div", {
  display: "flex",
  gap: "$2",
  "&:not(:last-child)": {
    marginBottom: "$4",
  },
});

const Socials = styled("div", {
  display: "flex",
  gap: "$2",
});

const FooterGroup = styled("div", {
  justifySelf: "flex-start",

  "@sm": {
    "&:not(:first-child)": {
      justifySelf: "center",
    },
  },
});

const Center = styled("p", {
  textAlign: "center",
  marginTop: "$5",
});

const StyledLink = styled("a", {
  color: "$primaryLight",
  transition: "all 0.2s ease",
  "&:hover": {
    color: "dodgerblue",
    cursor: "pointer",
  },
});
