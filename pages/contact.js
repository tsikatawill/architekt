import { Button } from "../components/Button";
import { Container } from "../components/Container";
import { PageHeader } from "../components/PageHeader";
import React from "react";
import { styled } from "../stitches.config";

const Contact = () => {
  return (
    <div>
      <Container>
        <Inner>
          <Left>
            <PageHeader title="Contact information" />
            <div>
              <strong>
                {"<<"}Ghana, West Africa{">>"}
              </strong>
              <p>123 Street, East Legon</p>
            </div>

            <a href="tel:+77017776811">
              <strong>+7 (701) 77 76 811</strong>
            </a>
            <a href="mailto:fakemail@provider.com">fakemail@provider.com</a>
            <Button>Feedback</Button>
          </Left>

          <MapWrapper>
            <Map
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63528.44666964756!2d-0.19333528420835602!3d5.636465621650872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b501278f4a5%3A0xca081548a0c20ffd!2sEast%20Legon%2C%20Accra!5e0!3m2!1sen!2sgh!4v1672453433095!5m2!1sen!2sgh"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapWrapper>
        </Inner>
      </Container>
    </div>
  );
};

const Inner = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$4",

  "@sm": {
    gridTemplateColumns: "1fr 50%",
    gap: "$5",
    // alignItems: "center",
  },
});

const MapWrapper = styled("div", {});

const Map = styled("iframe", {
  border: "none",
  margin: 0,
  width: "100%",
  p: 0,
});

const Left = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$4",
  justifyItems: "start",
});

export default Contact;
