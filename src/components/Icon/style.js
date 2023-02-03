import styled from "styled-components";

export const StyledIcon = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  svg,
  svg * {
    ${({ color }) => (color ? `fill:${color}` : "")};
    ${({ opacity }) => (opacity ? `opacity:${opacity}` : "")}
  }
`;
  