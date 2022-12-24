import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { Button } from "../Button";
import { Container } from "../Container";
import Image from "next/image";
import { carouselItems } from "./data";
import gsap from "gsap/dist/gsap";
import { styled } from "../../stitches.config";

export const Carousel = () => {
  const [selected, setSelected] = useState(0);

  const titleTopRef = useRef();
  const titleBottomRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    gsap.from(titleTopRef.current, {
      y: "-100px",
      duration: 0.5,
      ease: "circ",
    });
    gsap.from(titleBottomRef.current, {
      y: "100px",
      duration: 0.5,
      ease: "circ",
    });
    gsap.from(imageRef.current, {
      scale: 1.2,
      delay: 0.3,
      duration: 1,
      ease: "circ",
    });
  }, []);

  const handleSkip = (action) => {
    if (typeof action === "number") {
      setSelected((prev) => {
        if (prev < carouselItems.length - 1) {
          return action;
        } else {
          return 0;
        }
      });
    } else if (action === "forward") {
      setSelected((prev) => {
        if (prev < carouselItems.length - 1) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    } else if (action === "back") {
      setSelected((prev) => {
        if (prev === 0) {
          return carouselItems.length - 1;
        } else {
          return prev - 1;
        }
      });
    } else {
      setSelected(0);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleSkip(selected + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, [selected]);

  return (
    <div>
      <Container>
        <Inner>
          <Left>
            <Title>
              <TitleTop ref={titleTopRef}>
                {carouselItems[selected].title.split(" ")[0]}
              </TitleTop>
              <TitleBottom ref={titleBottomRef}>
                {carouselItems[selected].title.split(" ")[1]}
              </TitleBottom>
            </Title>

            <NavigationButtons>
              <NavigationButton onClick={() => handleSkip("back")}>
                <HiArrowLeft />
              </NavigationButton>
              <NavigationButton onClick={() => handleSkip("forward")}>
                <HiArrowRight />
              </NavigationButton>
            </NavigationButtons>

            <NavigationDisplay>
              <span>{selected + 1}</span>
              <span>/</span>
              <span>{carouselItems.length}</span>
            </NavigationDisplay>
          </Left>

          <ImageWrapper>
            <Image
              src={carouselItems[selected].image}
              alt={carouselItems[selected].title}
              width="770"
              height="830"
              ref={imageRef}
            />

            <StyledButton bg="white">
              Look at <HiArrowRight />
            </StyledButton>
          </ImageWrapper>
        </Inner>
      </Container>
    </div>
  );
};

const Inner = styled("div", {
  alignItems: "center",
  display: "flex",
  gap: "$5",
  justifyContent: "space-between",
});

const Left = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
});

const ImageWrapper = styled("div", {
  position: "relative",
  overflow: "hidden",
  height: 830,
  width: 770,

  "& img": {
    objectFit: "cover",
  },
});

const StyledButton = styled(Button, {
  position: "absolute",
  bottom: 0,
  left: 0,
  display: "flex",
  gap: "$2",
  justifyContent: "center",
  alignItems: "center",
});

const Title = styled("h1", {
  fontSize: "64px",
  lineHeight: 0.9,
});

const TitleTop = styled("span", {
  display: "block",
  color: "$primaryLight",
  fontWeight: "$light",
});

const TitleBottom = styled("span", {
  display: "block",
  color: "$primary",
  fontWeight: "$bolder",
});

const NavigationButtons = styled("div", {
  display: "flex",
  gap: "$4",
});

const NavigationButton = styled("button", {
  border: "1px solid $primaryLight",
  background: "none",
  height: 50,
  width: 50,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$primaryLight",
  transition: "all 0.2s ease",
  fontSize: 20,
  cursor: "pointer",

  "&:hover": {
    background: "$lightGrey",
    color: "$primary",
  },
});

const NavigationDisplay = styled("div", {
  fontSize: "$5",
  fontWeight: "$medium",
  color: "$primaryLight",
  display: "flex",
  gap: "$3",

  "& span": {
    padding: "$2",
  },
});
