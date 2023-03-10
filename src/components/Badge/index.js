import React from "react";
import PropTypes from "prop-types";
import { Count, StyledBadge } from "./style";

function Badge(props) {
  const {
    children,
    show = false,
    count = 0,
    showZero = false,
    ...rest
  } = props;
  return (
    <StyledBadge
      variant={children ? "dot" : "default"}
      show={show}
      count={count}
      showZero={showZero}
      {...rest}
    >
      {children || <Count>{count}</Count>}
    </StyledBadge>
  );
}

Badge.propTypes = {
  show: PropTypes.bool,
  count: PropTypes.number,
  showZero: PropTypes.bool,
  children: PropTypes.any,
};

export default Badge;
