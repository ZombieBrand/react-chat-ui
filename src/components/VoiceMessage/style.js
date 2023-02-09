import styled, { css } from "styled-components";
import { StyledButton } from "components/Button/style";
import { StyledIcon } from "components/Icon/style";
import  StyledText  from "components/Text/style";

const typeVariants = {
  mine: css`
    ${StyledButton} {
      background-color: white;

      ${StyledIcon} path {
        fill: ${({ theme }) => theme.primaryColor};
      }
    }
    & > ${StyledIcon} path {
      fill: white;
    }

    & > ${StyledText} {
      color: white;
    }
  `,
};

export const StyledVoiceMessage = styled.div`
  display: flex;
  align-items: center;

  & > button:first-of-type {
    flex-shrink: 0;
  }

  & > *:not(button:first-of-type) {
    margin-left: 16px;
  }

  ${({ type }) => type && typeVariants[type]}
`;
