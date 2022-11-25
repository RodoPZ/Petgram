import React from "react";
import { Link, Image } from "./styles";
import PropTypes from "prop-types";

export const Category = ({ cover, path = "", emoji = "?" }) => (
  <Link to={path}>
    <Image src={cover} />
    {emoji}
  </Link>
);

Category.propTypes = {
  cover: PropTypes.string,
  path: PropTypes.string,
  emoji: PropTypes.string,
};
