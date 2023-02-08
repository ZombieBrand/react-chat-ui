import styled, { css } from "styled-components";
import { circle } from "utils/mixins";

const variants = {
  default: css`
    ${({ theme }) => circle(theme.red, "26px")};
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 18px 40px 0 rgba(0, 0, 0, 0.04),
      0 6px 12px 0 rgba(0, 0, 0, 0.08);
    ${({ showZero, count }) =>
      !showZero && count === 0 && `visibility: hidden`};
  `,
  dot: css`
    position: relative;
    padding: 5px;
    &::after {
      display: ${({ show }) => (show ? "block" : "none")};
      content: "";
      ${({ theme }) => circle(theme.red, "6px")};
      position: absolute;
      right: 0;
      top: 0;
    }
  `,
};

export const Count = styled.div`
  font-size: ${({ theme }) => theme.normal};
  color: white;
`;

export const StyledBadge = styled.div`
  display: inline-block;
  ${({ variant }) => variants[variant]}
`;
