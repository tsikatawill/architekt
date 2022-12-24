import Link from "next/link";
import { styled } from "../../stitches.config";
import { useRouter } from "next/router";

export const Navlink = ({ children, ...props }) => {
  const { asPath } = useRouter();

  console.log(asPath);
  return (
    <StyledLink {...props} active={asPath === props.href}>
      {children}
    </StyledLink>
  );
};

const StyledLink = styled(Link, {
  fontSize: "$2",
  fontWeight: "$medium",
  py: 2,
  color: "$primary",
  border: "1px solid transparent",
  transition: "all 0.2s ease",

  "&:hover": {
    borderBottom: "1px solid $primary",
  },

  variants: {
    active: {
      true: {
        fontWeight: "$bold",
        borderTop: "1px solid $primary",
        borderBottom: "1px solid $primary",
      },
    },
  },
});
