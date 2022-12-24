import { HiMenuAlt2, HiX } from "react-icons/hi";

import { Container } from "../Container";
import Image from "next/image";
import Link from "next/link";
import { Navlink } from "./Navlink";
import { ROUTES } from "./routes";
import { Sidebar } from "../Sidebar";
import { styled } from "../../stitches.config";
import { useState } from "react";

export const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleClose = () => {
    setShowSidebar(false);
  };

  return (
    <nav>
      <Container>
        <Inner>
          <Link href="/">
            <Image src="/images/logo.svg" alt="logo" width="70" height="70" />
          </Link>

          <NavLinks>
            {ROUTES.map((route, idx) => (
              <Navlink key={idx} href={route.href}>
                {route.name}
              </Navlink>
            ))}
          </NavLinks>

          <NavToggle
            open={showSidebar}
            onClick={() => setShowSidebar(!showSidebar)}
          >
            {showSidebar ? <HiX /> : <HiMenuAlt2 />}
          </NavToggle>

          <Sidebar
            links={ROUTES}
            open={showSidebar}
            handleClose={handleClose}
          />
        </Inner>
      </Container>
    </nav>
  );
};

const Inner = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const NavLinks = styled("div", {
  display: "none",
  justifyContent: "space-between",
  gap: "$5",
  alignItems: "center",

  "@sm": {
    display: "flex",
  },
});

const NavToggle = styled("button", {
  display: "inline-flex",
  cursor: "pointer",
  background: "none",
  border: "none",
  fontSize: "$3",
  transition: "all 0.15s ease",

  "&:hover": {
    transform: "scale(1.15)",
  },

  variants: {
    open: {
      true: {
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 10,
      },
    },
  },

  "@sm": {
    display: "none",
  },
});
