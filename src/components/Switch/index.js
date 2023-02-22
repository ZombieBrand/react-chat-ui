import React from "react";
import PropTypes from "prop-types";
import { StyledSwitch, Checkbox, Slider } from "./style";

function Switch(props) {
  const { children, ...rest } = props;
  return (
    <StyledSwitch {...rest}>
      <Checkbox />
      <Slider />
    </StyledSwitch>
  );
}

Switch.propTypes = {
  children: PropTypes.any,
};

export default Switch;
