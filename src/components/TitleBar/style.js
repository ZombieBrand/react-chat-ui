import styled from "styled-components";
import { StyledIcon } from "components/Icon/style";
import { animated } from "react-spring";

export const Title = styled.div`
  display: grid;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${StyledIcon} {
    cursor: pointer;
  }
`;

export const StyledTitleBar = styled(animated.div)`
  display: grid;
  grid-template-columns: 62px 1fr 112px;
  padding: 30px;
  max-height: 110px;
  border-bottom: 1px solid ${({ theme }) => theme.gray4};
`;
