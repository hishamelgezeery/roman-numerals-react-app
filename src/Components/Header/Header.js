import React from "react";
import PropTypes from "prop-types";
import { Navbar } from "react-bootstrap";

const Header = ({
  navbarLink,
  backgroundColor,
  navbarText,
  variantType,
  expandType,
  style,
}) => {
  return (
    <Navbar
      bg={backgroundColor}
      variant={variantType}
      expand={expandType}
      style={style}
    >
      <Navbar.Brand href={navbarLink}>{navbarText}</Navbar.Brand>
    </Navbar>
  );
};

Header.propTypes = {
  navbarLink: PropTypes.string,
  backgroundColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "muted",
    "white",
  ]),
  variantType: PropTypes.oneOf(["light", "dark"]),
  expandType: PropTypes.oneOf(["sm" | "md" | "lg" | "xl"]),
  navbarText: PropTypes.string,
  style: PropTypes.object,
};

Header.defaultProps = {
  navbarLink: "#",
  navbarText: "",
};

export default Header;
