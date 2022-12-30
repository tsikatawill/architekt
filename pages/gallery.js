import { AnimatePresence, motion } from "framer-motion";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import React, { useEffect, useState } from "react";

import { ButtonImage } from "../components/ButtonImage";
import { Container } from "../components/Container";
import { GalleryImageAnim } from "../motions";
import Image from "next/image";
import { PageHeader } from "../components/PageHeader";
import { galleryItems } from "../components/Hero/data";
import { styled } from "../stitches.config";

const Gallery = () => {
  const [itemsToShow, setItemsToShow] = useState([]);

  const showMore = () => {
    if (itemsToShow.length < galleryItems.length) {
      setItemsToShow((prev) => {
        return galleryItems.slice(0, prev.length + 4);
      });
    } else {
      setItemsToShow(galleryItems);
    }
  };

  const showLess = () => {
    if (itemsToShow.length < galleryItems.length) {
      setItemsToShow((prev) => {
        return galleryItems.slice(0, prev.length - 4);
      });
    } else {
      setItemsToShow(galleryItems.slice(0, 4));
    }
  };

  useEffect(() => {
    setItemsToShow(galleryItems.slice(0, 4));
  }, []);

  return (
    <AnimatePresence>
      <Container>
        <PageHeader title="project gallery" />

        <ProjectsGrid initial={{ y: 50 }} animate={{ y: 0 }}>
          <AnimatePresence>
            {itemsToShow.map((item, idx) => (
              <ProjectCard
                key={idx}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={GalleryImageAnim}
              >
                <ProjectTitle className="title">{item.title}</ProjectTitle>
                <Image
                  src={item.image}
                  alt="project-image.jpg"
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  fill
                />
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
        <Center>
          <ButtonImage
            css={{
              display: itemsToShow.length > 4 ? "flex" : "none",
            }}
            onClick={showLess}
            text="Show Less"
            icon={<FiChevronUp />}
          />
          <ButtonImage
            disabled={galleryItems.length === itemsToShow.length}
            css={{
              cursor:
                galleryItems.length === itemsToShow.length
                  ? "not-allowed"
                  : "pointer",
            }}
            onClick={showMore}
            text="Show More"
            icon={<FiChevronDown />}
          />
        </Center>
      </Container>
    </AnimatePresence>
  );
};

export default Gallery;

const ProjectsGrid = styled(motion.div, {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "$4",
  marginBottom: "$4",
});

const ProjectCard = styled(motion.div, {
  position: "relative",
  height: 260,
  background: "$primaryLight",
  overflow: "hidden",

  "&:hover": {
    "& img": {
      transition: "all 1s ease",
      filter: "grayscale()",
      transform: "scale(1.2)",
    },
    "& .title": {
      bottom: "0",
    },
  },
});

const ProjectTitle = styled("div", {
  position: "absolute",
  background: "$lightGrey",
  zIndex: 5,
  minHeight: "fit-content",
  bottom: "-100%",
  transition: "all 0.25s ease-in",
  p: "$4",
  left: 0,
  right: 0,
  color: "$primary",
});

const Center = styled("div", {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  gap: "$4",
  py: "$5",
  marginBottom: "$5",
  flexDirection: "column",

  "@sm": {
    flexDirection: "row",
  },
});
