import styled, { css } from "styled-components";
import Paragraph from "components/Paragraph";
import Icon from "components/Icon";
import Text from "components/Text";

export const Time = styled(Paragraph).attrs({ type: "secondary", size: "small" })`
  margin: 6px;
  margin-left: 24px;
  word-spacing: 1rem;
`;

export const BubbleTip = styled(Icon)`
  position: absolute;
  bottom: -15%;
  left: 0;

  z-index: 5;
`;

export const Bubble = styled.div`
  padding: 15px 22px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  position: relative;
  z-index: 10;
`;

export const MessageText = styled(Text)``;

export const typeVariants = {
  mine: css`
    ${Bubble} {
      background-color: ${({ theme }) => theme.primaryColor};
    }

    ${BubbleTip} {
      transform: rotateY(180deg);
      left: unset;
      right: 0;

      path {
        fill: ${({ theme }) => theme.primaryColor};
      }
    }

    ${Time} {
      text-align: right;
      margin-left: 0;
      margin-right: 24px;
    }

    ${MessageText} {
      color: white;
    }
  `,
};

export const StyledChatBubble = styled.div`
  display: flex;
  flex-direction: column;

  ${({ type }) => type && typeVariants[type]}
`;