import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { click, propUp, scaleDown, sideSlide } from "../../motions";
import { useEffect, useState } from "react";

import { Button } from "../Button";
import { Container } from "../Container";
import Image from "next/image";
import { NavigationButton } from "../NavigationButton";
import { carouselItems } from "./data";
import { motion } from "framer-motion";
import { styled } from "../../stitches.config";
import { useRouter } from "next/router";

export const Carousel = () => {
  const [selected, setSelected] = useState(0);
  const router = useRouter();

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
        {carouselItems.map((item, idx) => {
          if (carouselItems.indexOf(item) === selected) {
            return (
              <Inner key={idx}>
                <Left>
                  <Title>
                    <TitleTop
                      variants={sideSlide()}
                      initial="initial"
                      whileInView="animate"
                    >
                      {item.title.split(" ")[0]}
                    </TitleTop>
                    <TitleBottom
                      variants={sideSlide("right")}
                      initial="initial"
                      whileInView="animate"
                    >
                      {item.title.split(" ")[1]}
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
                    <NavigationIndicator
                      variants={propUp}
                      initial="initial"
                      whileInView="animate"
                    >
                      {selected + 1}
                    </NavigationIndicator>
                    <NavigationIndicator>/</NavigationIndicator>
                    <NavigationIndicator>
                      {carouselItems.length}
                    </NavigationIndicator>
                  </NavigationDisplay>
                </Left>

                <ImageBlock>
                  <ImageWrapper
                    variants={scaleDown}
                    initial="initial"
                    whileInView="animate"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </ImageWrapper>

                  <StyledButton
                    bg="white"
                    onClick={() => router.push(item.link)}
                  >
                    Look at
                    <HiArrowRight />
                  </StyledButton>
                </ImageBlock>
              </Inner>
            );
          }
        })}
      </Container>
    </div>
  );
};

const Inner = styled("div", {
  alignItems: "flex-start",
  display: "flex",
  gap: "$5",
  flexDirection: "column",
  justifyContent: "space-between",

  "@sm": {
    flexDirection: "row",
    alignItems: "center",
  },
});

const Left = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  py: "$4",
});

const ImageBlock = styled("div", {
  position: "relative",
  overflow: "hidden",
  height: 400,
  width: "100%",

  "@sm": {
    height: 830,
    width: 770,
  },

  "& img": {
    objectFit: "cover",
  },
});

const ImageWrapper = styled(motion.div, {
  position: "relative",
  height: "100%",
  width: "100%",
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
  lineHeight: 0.9,
  fontSize: "$6",

  "@sm": {
    fontSize: "clamp($4, 5vw, $6)",
  },
});

const TitleTop = styled(motion.span, {
  display: "block",
  color: "$primaryLight",
  fontWeight: "$light",
});

const TitleBottom = styled(motion.span, {
  display: "block",
  color: "$primary",
  fontWeight: "$bolder",
});

export const NavigationButtons = styled("div", {
  display: "flex",
  gap: "$4",
});

export const NavigationDisplay = styled("div", {
  fontSize: "$5",
  fontWeight: "$medium",
  color: "$primaryLight",
  display: "flex",
  alignItems: "center",
  gap: "$3",
});

export const NavigationIndicator = styled(motion.span, {
  padding: "$2",
});
