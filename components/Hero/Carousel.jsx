import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { Button } from "../Button";
import { Container } from "../Container";
import Image from "next/image";
import gsap from "gsap/dist/gsap";
import { styled } from "../../stitches.config";

export const Carousel = () => {
  const [selected, setSelected] = useState(0);

  const CarouselItems = [
    {
      title: "PROJECT NURTOWN",
      image: "/images/hero.jpg",
      link: "/projects/project-nurtown",
    },
  ];

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
        if (prev < testimonies.length - 1) {
          return action;
        } else {
          return 0;
        }
      });
    } else if (action === "forward") {
      setSelected((prev) => {
        if (prev < testimonies.length - 1) {
          return prev + 1;
        } else {
          return 0;
        }
      });
    } else if (action === "back") {
      setSelected((prev) => {
        if (prev === 0) {
          return testimonies.length - 1;
        } else {
          return prev - 1;
        }
      });
    } else {
      setSelected(0);
    }
  };

  return (
    <div>
      <Container>
        <Inner>
          <Left>
            <Title>
              <TitleTop ref={titleTopRef}>
                {CarouselItems[selected].title.split(" ")[0]}
              </TitleTop>
              <TitleBottom ref={titleBottomRef}>
                {CarouselItems[selected].title.split(" ")[1]}
              </TitleBottom>
            </Title>
          </Left>

          <ImageWrapper>
            <Image
              src={CarouselItems[selected].image}
              alt={CarouselItems[selected].title}
              width="770"
              height="830"
              ref={imageRef}
            />

            <StyledButton bg="white">sad</StyledButton>
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
  //   flexShrink: 0,
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
