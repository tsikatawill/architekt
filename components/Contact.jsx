import { Input, InputGroup, Textbox } from "./FormElements";

import { ButtonImage } from "./ButtonImage";
import { Container } from "./Container";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import { styled } from "../stitches.config";

export const Contact = () => {
  return (
    <section>
      <Container>
        <SectionHeader>Contact us</SectionHeader>

        <Flex>
          <Form>
            <InputGroup>
              <Input required type="text" placeholder="Fullname" />
            </InputGroup>
            <InputGroup>
              <Input required type="tel" placeholder="Phone number" />
            </InputGroup>
            <InputGroup>
              <Input required type="email" placeholder="Email" />
            </InputGroup>
            <InputGroup>
              <Textbox required placeholder="Message" />
            </InputGroup>

            <Check>
              <input required type="checkbox" id="agree" />
              <label htmlFor="agree">Agree with our privacy policies</label>
            </Check>
            <ButtonImage text="Send" icon={<HiArrowRight />} />
          </Form>

          <ImageWrapper>
            <Image src="/images/new-2.jpg" fill alt="image.jpg" />
          </ImageWrapper>
        </Flex>
      </Container>
    </section>
  );
};

const Flex = styled("div", {
  display: "flex",
  gap: "$4",
  marginTop: "$4",
  flexDirection: "column",

  "@sm": {
    flexDirection: "row",
  },
});

const Form = styled("form", {
  maxWidth: 400,
  width: "100%",
  flexShrink: 0,
  alignSelf: "center",
  fontSize: "$3",

  "@sm": {
    alignSelf: "flex-start",
  },
});

const Check = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$1",

  marginBottom: "$2",

  "& input": {
    height: 15,
    width: 15,
    cursor: "pointer",
  },
  "& label": {
    cursor: "pointer",
  },
});

const ImageWrapper = styled("div", {
  position: "relative",
  display: "none",
  height: 300,
  width: "100%",

  "@sm": {
    display: "block",
  },

  "& img": {
    objectFit: "cover",
  },
});
