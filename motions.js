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

export const propUp = {
  initial: { y: 15 },
  animate: { y: 0, transition: { duration: 0.5 } },
};

export const click = {
  initial: { scale: 1 },
  animate: { scale: 0.95, transition: { duration: 0.05 } },
};
