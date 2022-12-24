import { Container } from "./Container";
import { Navlink } from "./Navbar/Navlink";
import { ROUTES } from "./Navbar/routes";
import React from "react";
import { styled } from "../stitches.config";

export const Sidebar = ({
  links = [],
  open = true,
  handleClose = () => {
    return;
  },
}) => (
  <Wrapper open={open}>
    <Container>
      <NavItems>
        {ROUTES.map((item, idx) => (
          <li
            onClick={() => {
              handleClose();
            }}
            key={idx}
          >
            <Navlink href={item.href}>{item.name}</Navlink>
          </li>
        ))}
      </NavItems>
    </Container>
  </Wrapper>
);

const Wrapper = styled("nav", {
  position: "fixed",
  top: 0,
  left: "100%",
  width: "100%",
  minHeight: "100vh",
  background: "white",
  display: "grid",
  placeContent: "center",
  transition: "all 1s ease",
  pointerEvents: "all",
  zIndex: 9,
  shadow: 2,

  "@sm": {
    display: "none",
    pointerEvents: "none",
  },

  variants: {
    open: {
      true: {
        left: 0,
      },
    },
  },
});

const NavItems = styled("ul", {
  display: "flex",
  listStyle: "none",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  minHeight: "80vh",
});
