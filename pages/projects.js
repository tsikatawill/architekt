import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import {
  NavigationButtons,
  NavigationDisplay,
  NavigationIndicator,
} from "../components/Hero/Carousel";

import { ButtonImage } from "../components/ButtonImage";
import { Container } from "../components/Container";
import Image from "next/image";
import { NavigationButton } from "../components/NavigationButton";
import { PageHeader } from "../components/PageHeader";
import React from "react";
import { styled } from "../stitches.config";

const Projects = () => {
  return (
    <div>
      <Container>
        <PageHeader title="Our projects" />

        <ProjectCards>
          <ProjectCard>
            <Image
              src="/images/Website of architects (1)/image 30.jpg"
              height="435"
              width="600"
              alt="project.jpg"
            />

            <div>
              <ProjectTitle>Comprehensive School</ProjectTitle>
              <ProjectDesc>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae odio quisquam maxime, nihil rem consequuntur sunt quae
                neque libero ad dolore ex quaerat ipsam ipsa ducimus ea tempora,
                quidem consectetur.
              </ProjectDesc>
              <ButtonImage bg="white" text="Watch" icon={<HiArrowRight />} />
            </div>
          </ProjectCard>

          <ProjectCard>
            <Image
              src="/images/Website of architects (1)/image 32.jpg"
              height="435"
              width="600"
              alt="project.jpg"
            />

            <div>
              <ProjectTitle>Parking for 500 cars</ProjectTitle>
              <ProjectDesc>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae odio quisquam maxime, nihil rem consequuntur sunt quae
                neque libero ad dolore ex quaerat ipsam ipsa ducimus ea tempora,
                quidem consectetur.
              </ProjectDesc>
              <ButtonImage bg="white" text="Watch" icon={<HiArrowRight />} />
            </div>
          </ProjectCard>

          <ProjectCard>
            <Image
              src="/images/Website of architects (1)/image 33.jpg"
              height="435"
              width="600"
              alt="project.jpg"
            />

            <div>
              <ProjectTitle>Office interior project</ProjectTitle>
              <ProjectDesc>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Molestiae odio quisquam maxime, nihil rem consequuntur sunt quae
                neque libero ad dolore ex quaerat ipsam ipsa ducimus ea tempora,
                quidem consectetur.
              </ProjectDesc>
              <ButtonImage bg="white" text="Watch" icon={<HiArrowRight />} />
            </div>
          </ProjectCard>
        </ProjectCards>

        <Navigation>
          <NavigationDisplay>
            <NavigationIndicator>1</NavigationIndicator>
            <spam>/</spam>
            <NavigationIndicator>2</NavigationIndicator>
          </NavigationDisplay>
          <NavigationButtons>
            <NavigationButton>
              <HiArrowLeft />
            </NavigationButton>
            <NavigationButton>
              <HiArrowRight />
            </NavigationButton>
          </NavigationButtons>
        </Navigation>
      </Container>
    </div>
  );
};

const ProjectCards = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$4",
});

const ProjectCard = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "$4",
  alignItems: "center",
  minHeight: 435,

  "& img": {
    width: "100%",
    objectFit: "cover",
  },

  "@sm": {
    gridTemplateColumns: "3fr 2fr",
    gap: "$9",
    height: 435,
  },
});

const ProjectTitle = styled("h2", {
  color: "$primaryLight",
  fontWeight: "$light",
  fontSize: "40px",
  marginBottom: "$3",
});

const ProjectDesc = styled("p", {
  fontWeight: "$light",
  fontSize: "$2",
  marginBottom: "$6",
});

const Navigation = styled("div", {
  display: "flex",
  gap: "$4",
  marginTop: "$5",
});

export default Projects;
