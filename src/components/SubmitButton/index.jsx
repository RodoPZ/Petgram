import React from "react";
import { Button } from "./styles";
import PropTypes from "prop-types";

export const SubmitButton = ({ children, onClick, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {children}
    </Button>
  );
};

SubmitButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
