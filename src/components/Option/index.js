import React from "react";
import PropTypes from "prop-types";
import { StyledOption } from "./style";

function Option(props) {
  const { children, ...rest } = props;
  return (
    <StyledOption {...rest}>
     {children}
    </StyledOption>
  );
}

Option.propTypes = {
    children: PropTypes.any
};

export default Option;
