import { Button } from "./Button";
import { ButtonImage } from "./ButtonImage";
import { Container } from "./Container";
import { HiArrowRight } from "react-icons/hi";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import { styled } from "../stitches.config";
import { useRouter } from "next/router";

export const Projects = () => {
  const router = useRouter();

  return (
    <section>
      <Container>
        <SectionHeader>Our projects</SectionHeader>

        <TopGrid>
          <ProjectCard>
            <Image src="/images/project-1.jpg" alt="s" fill />
            <CardInner>
              <CardTitle>Aquarious</CardTitle>
              <CardLink>
                <span>Go to</span>
                <HiArrowRight />
              </CardLink>
            </CardInner>
          </ProjectCard>

          <ProjectCard>
            <Image src="/images/project-2.jpg" alt="s" fill />
            <CardInner>
              <CardTitle>Peacockus</CardTitle>
              <CardLink>
                <span>Go to</span>
                <HiArrowRight />
              </CardLink>
            </CardInner>
          </ProjectCard>
        </TopGrid>

        <BottomGrid>
          <ProjectCard>
            <Image src="/images/project-3.jpg" alt="s" fill />
            <CardInner>
              <CardTitle>Squaro</CardTitle>
              <CardLink>
                <span>Go to</span>
                <HiArrowRight />
              </CardLink>
            </CardInner>
          </ProjectCard>
          <ProjectCard>
            <Image src="/images/project-4.jpg" alt="s" fill />
            <CardInner>
              <CardTitle>Apartmentous</CardTitle>
              <CardLink>
                <span>Go to</span>
                <HiArrowRight />
              </CardLink>
            </CardInner>
          </ProjectCard>
          <ProjectCard>
            <Image src="/images/project-5.jpg" alt="s" fill />
            <CardInner>
              <CardTitle>Radius</CardTitle>
              <CardLink>
                <span>Go to</span>
                <HiArrowRight />
              </CardLink>
            </CardInner>
          </ProjectCard>
        </BottomGrid>

        <Right>
          <ButtonImage
            text="All projects"
            icon={<HiArrowRight />}
            onClick={() => router.push("/projects")}
          />
        </Right>
      </Container>
    </section>
  );
};

const TopGrid = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$4",
  marginTop: "$4",

  "@sm": {
    flexDirection: "row",
  },
});

const ProjectCard = styled("div", {
  flex: "auto",
  background: "$lightGrey",
  height: "255px",
  width: "100%",
  position: "relative",
  overflow: "hidden",

  "@sm": {
    flex: 1,
  },

  "&:hover > div": {
    top: 0,
  },
});

const CardInner = styled("div", {
  background: "rgba(0,0,0,0.5)",
  position: "absolute",
  top: "100%",
  width: "100%",
  color: "white",
  transition: "all 0.5s ease",
  padding: "$5",
  display: "grid",
  placeContent: "center",
  height: "100%",
});

const CardTitle = styled("p", {
  fontWeight: "$bolder",
  lineHeight: "64px",
  fontSize: "3rem",
  "@sm": {
    fontSize: "clamp($5, 5vw, $6)",
  },
});

const CardLink = styled("button", {
  background: "none",
  border: "none",
  cursor: "pointer",
  py: 10,
  display: "flex",
  gap: "$2",
  color: "White",
});

const BottomGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  marginTop: "$4",
  gap: "$4",

  "@sm": {
    gridTemplateColumns: "2fr 4fr 3fr",
  },
});

const Right = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  marginTop: "$4",

  "@sm": {
    justifyContent: "flex-end",
  },
});
