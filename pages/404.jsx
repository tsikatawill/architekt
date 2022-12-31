import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { HiOutlineHome } from "react-icons/hi";
import Image from "next/image";
import React from "react";
import { styled } from "../stitches.config";
import { useRouter } from "next/router";

const ErrorPage = () => {
  const router = useRouter();

  return (
    <Wrapper>
      <Container>
        <Image src="/images/404.svg" width="400" height="400" alt="404.svg" />

        <Cta onClick={() => router.push("/")}>
          Go home <HiOutlineHome />
        </Cta>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled("div", {
  display: "grid",
  marginTop: 10,
  placeContent: "center",
});

const Cta = styled(Button, {
  alignItems: "center",
  background: "$primary",
  color: "White",
  display: "flex",
  gap: "$2",
  justifyContent: "center",
  marginTop: "$5",
  textAlign: "center",
  width: "100%",
});

export default ErrorPage;
