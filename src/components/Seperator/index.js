import React from "react";
import PropTypes from "prop-types";
import { StyledSeperator } from "./style";

function Seperator(props) {
  const { ...rest } = props;
  return <StyledSeperator {...rest}></StyledSeperator>;
}

Seperator.propTypes = {
  children: PropTypes.any,
};

export default Seperator;
