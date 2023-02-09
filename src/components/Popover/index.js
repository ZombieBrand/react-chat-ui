import React, { useState } from "react";
import PropTypes from "prop-types";
import { Content, StyledPopover, Target, Triangle } from "./style";

function Popover(props) {
  const { children, content, offset = {}, onVisible, onHide, ...rest } = props;
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    if (visible) {
      setVisible(false);
      onHide && onHide();
    } else {
      setVisible(true);
      onVisible && onVisible();
    }
  };
  return (
    <StyledPopover onClick={handleClick} {...rest}>
      <Content visible={visible} offset={offset}>
        {content}
      </Content>
      <Triangle visible={visible} offset={offset}></Triangle>
      <Target>{children}</Target>
    </StyledPopover>
  );
}

Popover.propTypes = {
  children: PropTypes.any,
  content: PropTypes.any,
  offset: PropTypes.shape({ x: PropTypes.string, y: PropTypes.string }),
  onVisible: PropTypes.func,
  onHide: PropTypes.func,
};

export default Popover;
