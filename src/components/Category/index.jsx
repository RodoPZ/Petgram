import React from "react";
import { Anchor, Image } from "./styles";
import PropTypes from "prop-types";

export const Category = ({ cover, path, emoji = "?", loading = false }) => (
  <Anchor href={path}>
    <Image src={cover} lazyLoading={loading} />
    {emoji}
  </Anchor>
);

Category.propTypes = {
  cover: PropTypes.string,
  path: PropTypes.string,
  emoji: PropTypes.string,
  loading: PropTypes.bool,
};
