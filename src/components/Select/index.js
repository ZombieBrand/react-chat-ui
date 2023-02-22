import React from "react";
import PropTypes from "prop-types";
import { StyledSelect } from "./style";
import LabelContainer from "components/LabelContainer";

function Select(props) {
  const { label, type, children, ...rest } = props;
  const selectWithoutLabel = (
    <StyledSelect type={type} {...rest}>
      {children}
    </StyledSelect>
  );
  return label ? (
    <LabelContainer label={label}>{selectWithoutLabel}</LabelContainer>
  ) : (
    <StyledSelect {...rest}>{children}</StyledSelect>
  );
}

Select.propTypes = {
  type: PropTypes.oneOf(["form"]),
  children: PropTypes.any,
};

export default Select;
