export const sideSlide = (direction = "left", duration = 1.5) => ({
  initial: {
    x: direction === "right" ? -50 : 50,
  },
  animate: {
    x: 0,
    transition: { duration },
  },
});

export const scaleDown = {
  initial: { scale: 1.2 },
  animate: { scale: 1, transition: { duration: 1.5, delay: 0.3 } },
};

export const propY = (direction = "top", duration = 1) => ({
  initial: {
    y: direction === "down" ? -50 : 50,
  },
  animate: {
    y: 0,
    transition: { duration, ease: "easeOut" },
  },
});

export const propUp = {
  initial: { y: 15 },
  animate: { y: 0, transition: { duration: 0.5 } },
};

export const click = {
  initial: { scale: 1 },
  animate: { scale: 0.95, transition: { duration: 0.05 } },
};

export const GalleryImageAnim = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { opacity: 1, scale: 1, transition: { ease: "easeIn" } },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: { duration: 0.15 },
  },
};
