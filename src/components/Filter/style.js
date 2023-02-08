import styled from "styled-components";
import StyledText from "components/Text/style";

export const Filters = styled.div``;

export const Action = styled.div`
  justify-self: end;
  ${StyledText} {
    padding-right: 1rem;
  }
`;

export const StyledFilter = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`;
