import { Container } from "./Container";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import { sideSlide } from "../motions";
import { styled } from "../stitches.config";

export const About = () => {
  return (
    <section>
      <Container>
        <Inner>
          <Leftee>
            <Image
              src="/images/about-3.jpg"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              alt="about-3.jpg"
            />
          </Leftee>
          {/* <Left>
            <LeftStack>
              <ImageWrapper bigger>
                <Image
                  src="/images/about-1.jpg"
                  fill
                  alt="about-1.jpg"
                  sizes="(max-width: 768px) 80vw,
              (max-width: 1200px) 50vw,
              33vw"
                />
              </ImageWrapper>
              <ImageWrapper>
                <Image src="/images/about-2.jpg" fill alt="about-2.jpg" />
              </ImageWrapper>
            </LeftStack>
            
            <ImageWrapper biggest>
              <Image src="/images/about-3.jpg" fill alt="about-3.jpg" />
            </ImageWrapper>
          </Left> */}

          <Right>
            <SectionHeader
              variants={sideSlide()}
              initial="initial"
              whileInView="animate"
            >
              About us
            </SectionHeader>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry{"'"}s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </Right>
        </Inner>
      </Container>
    </section>
  );
};

const Inner = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "$5",
  flexDirection: "column-reverse",

  "@sm": {
    flexDirection: "row",
  },
});

const Left = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$5",
  flexWrap: "wrap",
  flexShrink: 0,
  justifyContent: "center",

  "@sm": {
    justifyContent: "flex-start",
  },
});

const LeftStack = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$5",
});

const ImageWrapper = styled("div", {
  position: "relative",
  width: 270,
  height: 140,
  background: "Tomato",

  variants: {
    bigger: {
      true: {
        height: 265,
        background: "Dodgerblue",
      },
    },
    biggest: {
      true: {
        height: 345,
        background: "$primaryLight",
      },
    },
  },
});

const Right = styled("div", {
  maxWidth: 400,
  py: "$5",
  alignSelf: "center",

  "@sm": {
    alignSelf: "flex-start",
  },
});

const Leftee = styled("div", {
  position: "relative",
  // width: 300,
  height: 300,
});
