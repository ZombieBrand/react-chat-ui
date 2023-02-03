import React from "react";
import PropTypes from "prop-types";
import { StyledIcon } from "./style";

function Icon(props) {
  const {
    icon: IconComponent,
    width = 24,
    height = 24,
    color,
    opacity,
    ...rest
  } = props;
  return (
    <StyledIcon color={color} opacity={opacity} {...rest}>
      {IconComponent && (
        <IconComponent width={width} height={height}></IconComponent>
      )}
    </StyledIcon>
  );
}

Icon.propTypes = {
  icon: PropTypes.elementType,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  opacity: PropTypes.number,
};

export default Icon;
