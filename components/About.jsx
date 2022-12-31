import { ButtonImage } from "./ButtonImage";
import { Container } from "./Container";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import { sideSlide } from "../motions";
import { styled } from "../stitches.config";

export const About = () => {
  return (
    <section>
      <Container>
        <Inner>
          <Left>
            <LeftStack>
              <ImageWrapper>
                <Image
                  src="/images/about-1.jpg"
                  alt="about-1.jpg"
                  height="265"
                  width="270"
                />
              </ImageWrapper>
              <ImageWrapper>
                <Image
                  height="140"
                  width="270"
                  src="/images/about-2.jpg"
                  alt="about-2.jpg"
                />
              </ImageWrapper>
            </LeftStack>
            <RightStack>
              <ImageWrapper>
                <Image
                  src="/images/about-3.jpg"
                  alt="about-3.jpg"
                  height="345"
                  width="270"
                />
              </ImageWrapper>
            </RightStack>
          </Left>

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
            <ButtonImage bg="white" text="Learn more" icon={<HiArrowRight />} />
          </Right>
        </Inner>
      </Container>
    </section>
  );
};

const Inner = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$4",
  background: "#fbfbfb",
  padding: "$4",

  "@sm": {
    gridTemplateColumns: "3fr 2fr",
  },
});

const Left = styled("div", {
  display: "none",
  alignItems: "center",
  gap: "$4",
  justifyContent: "center",

  "@sm": {
    display: "flex",
  },
});

const LeftStack = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  flexShrink: 0,
});

const RightStack = styled("div", {
  flexShrink: 0,
  width: "fit-content",
});

const ImageWrapper = styled("div", {
  position: "relative",
  height: "fit-content",
  width: "100%",
});

const Right = styled("div", {
  display: "grid",
  justifyItems: "start",
  alignContent: "start",
  gap: "$3",

  "& p": {
    lineHeight: "25px",
  },
});
