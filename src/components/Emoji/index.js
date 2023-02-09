import React from "react";
import PropTypes from "prop-types";
import { StyledEmoji } from "./style";

function Emoji(props) {
  const { children, label, size = "14px", ...rest } = props;
  return (
    <StyledEmoji role="img" size={size} aria-label={label} {...rest}>
      {children}
    </StyledEmoji>
  );
}

Emoji.propTypes = {
  children: PropTypes.any,
  label: PropTypes.string,
  size: PropTypes.string,
};

export default Emoji;
