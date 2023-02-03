import React from "react";
import PropTypes from "prop-types";
import { StyledIcon } from "./style";

function Icon(props) {
  const { children, ...rest } = props;
  return (
    <StyledIcon {...rest}>
     {children}
    </StyledIcon>
  );
}

Icon.propTypes = {
    children: PropTypes.any
};

export default Icon;
