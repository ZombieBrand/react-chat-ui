import styled from "styled-components";
import CaretDown from "assets/icons/caret_down.svg";
export const StyledSelect = styled.select`
  appearance: none;
  background-image: url(${CaretDown});
  background-repeat: no-repeat;
  background-position: right center;
  background-color: transparent;
  border: none;
  padding-right: 14px;
  font-size: ${({ theme }) => theme.normal};
  color: ${({ theme }) => theme.grayDark};
`;
