import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { click, propUp, scaleDown, sideSlide } from "../../motions";
import { useEffect, useState } from "react";

import { Button } from "../Button";
import { Container } from "../Container";
import Image from "next/image";
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
                    <NavigationButton
                      variants={click}
                      initial="initial"
                      whileTap="animate"
                      onClick={() => handleSkip("back")}
                    >
                      <HiArrowLeft />
                    </NavigationButton>
                    <NavigationButton
                      variants={click}
                      initial="initial"
                      whileTap="animate"
                      onClick={() => handleSkip("forward")}
                    >
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

                <ImageWrapper>
                  <motion.div
                    variants={scaleDown}
                    initial="initial"
                    whileInView="animate"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width="770"
                      height="830"
                    />
                  </motion.div>

                  <StyledButton
                    bg="white"
                    onClick={() => router.push(item.link)}
                  >
                    Look at
                    <HiArrowRight />
                  </StyledButton>
                </ImageWrapper>
              </Inner>
            );
          }
        })}
      </Container>
    </div>
  );
};

const Inner = styled("div", {
  alignItems: "center",
  display: "flex",
  flexWrap: "wrap",
  gap: "$5",
  justifyContent: "space-between",
});

const Left = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  py: "$4",
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

const NavigationButtons = styled("div", {
  display: "flex",
  gap: "$4",
});

const NavigationButton = styled(motion.button, {
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
    color: "$primary",
    border: "1px solid $primary",
  },
});

const NavigationDisplay = styled("div", {
  fontSize: "$5",
  fontWeight: "$medium",
  color: "$primaryLight",
  display: "flex",
  gap: "$3",
});

const NavigationIndicator = styled(motion.span, {
  padding: "$2",
});
