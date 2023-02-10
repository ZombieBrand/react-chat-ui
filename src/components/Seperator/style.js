import styled from "styled-components";

export const ContactSection = styled.section`
  display: grid;
  row-gap: 18px;
`;

export const StyledSeperator = styled.div`
  width: 100%;
  height: 1px;
  border-bottom: 1px solid ${({ theme }) => theme.gray4};
`;
