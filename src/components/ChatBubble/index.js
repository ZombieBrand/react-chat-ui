import React from "react";
import PropTypes from "prop-types";
import {
  StyledChatBubble,
  Bubble,
  BubbleTip,
  Time,
  MessageText,
} from "./style";

import { ReactComponent as BubbleTipIcon } from "assets/icons/bubbleTip.svg";
function ChatBubble(props) {
  const { children, type, time, ...rest } = props;
  return (
    <StyledChatBubble type={type} {...rest}>
      <Bubble>
        <BubbleTip icon={BubbleTipIcon} width={40} height={28} color="white" />
        <MessageText>{children}</MessageText>
      </Bubble>
      <Time>{time}</Time>
    </StyledChatBubble>
  );
}

ChatBubble.propTypes = {
  children: PropTypes.any,
  type: PropTypes.oneOf(["mine"]),
  time: PropTypes.string,
};

export default ChatBubble;
