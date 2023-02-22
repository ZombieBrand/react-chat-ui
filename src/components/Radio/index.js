import React from "react";
import PropTypes from "prop-types";
import { Circle, StyledRadio, RadioButton, StyledRadioGroup } from "./style";
import LabelContainer from "components/LabelContainer";

function Radio(props) {
  const { name, children, ...rest } = props;
  return (
    <StyledRadio {...rest}>
      {children}
      <RadioButton name={name} />
      <Circle />
    </StyledRadio>
  );
}

function RadioGroup({ label, children, ...rest }) {
  return (
    <LabelContainer label={label}>
      <StyledRadioGroup {...rest}>{children}</StyledRadioGroup>
    </LabelContainer>
  );
}

Radio.Group = RadioGroup;

Radio.propTypes = {
  name: PropTypes.string,
  children: PropTypes.any,
};

RadioGroup.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
};

export default Radio;
