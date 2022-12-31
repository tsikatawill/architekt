import { createStitches } from "@stitches/react";

export const { styled } = createStitches({
  theme: {
    colors: {
      primary: "#333333",
      primaryHover: "#222222",
      primaryLight: "#BDBDBD",
      lightGrey: "#F2F2F2",
      footer: "#2C2C2C",
      greyHover: "#d4dee0",
    },
    fontSizes: {
      1: "12px",
      2: "16px",
      3: "18px",
      4: "20px",
      5: "24px",
      6: "64px",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "30px",
      6: "35px",
      7: "40px",
      8: "50px",
      9: "60px",
      10: "70px",
      screenY: "100vh",
      screenX: "100vw",
    },
    fontWeights: {
      light: 300,
      medium: 400,
      regular: 500,
      bold: 600,
      bolder: 700,
    },
  },
  utils: {
    shadow: (value) => {
      return value === 1
        ? { boxShadow: "5px 5px 10px rgba(0,0,0,0.1)" }
        : value === 2
        ? { boxShadow: "-5px -5px 20px rgba(0,0,0,0.05)" }
        : value === 3 && {
            boxShadow: "10px 40px 50px rgba(229, 233, 246, 0.4)",
          };
    },
    p: (value) => ({ padding: value }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    m: (value) => ({ margin: value }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    mx: (value) => ({
      marginLeft: value,
      marginRight: value,
    }),
  },
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    md: "(min-width: 1024px)",
    md: "(min-width: 1536px)",
  },
});
