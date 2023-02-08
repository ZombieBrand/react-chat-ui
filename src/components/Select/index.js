import React from "react";
import PropTypes from "prop-types";
import { StyledSelect } from "./style";

function Select(props) {
  const { children, ...rest } = props;
  return (
    <StyledSelect {...rest}>
     {children}
    </StyledSelect>
  );
}

Select.propTypes = {
    children: PropTypes.any
};

export default Select;
