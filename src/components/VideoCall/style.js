import styled from "styled-components";
import Button from "components/Button";
import Avatar from "components/Avatar";
import { card } from "utils/mixins";

export const Actions = styled.div`
  grid-area: actions / title;
  align-self: end;
  justify-self: center;

  display: grid;
  grid-template-columns: 90px 90px 90px;
`;

export const Action = styled(Button).attrs({ size: "64px" })`
  font-size: 32px;
  color: white;

  box-shadow: none;
  background: ${({ theme, type }) =>
    type === "hangoff" ? theme.red2 : theme.grayDark2};
`;

export const Self = styled(Avatar)`
  grid-area: self;
  align-self: end;
  justify-self: end;
`;

export const Minimize = styled(Button)`
  justify-self: end;
  grid-area: title;
  background-color: ${({ theme }) => theme.gray3};
  padding: 0;
  width: 62px;
  height: 62px;
  font-size: 46px;
`;

export const VideoCallAlert = styled.div`
  display: grid;
  grid-template-areas:
    "avatar info info"
    "avatar action icon";
  row-gap: 5px;
  column-gap: 10px;
  align-items: center;
  width: max-content;
  position: absolute;
  right: 0;
  top: 10vh;
  border: 1px solid ${({ theme }) => theme.gray4};
  z-index: 200;
  ${card}
`;

export const StyledVideoCall = styled.div`
  height: 100%;
  padding: 20px;
  padding-bottom: 40px;
  background: linear-gradient(90deg, #7e898f 0%, #636c75 100%),
    radial-gradient(
      at top,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(0, 0, 0, 0.55) 100%
    ),
    radial-gradient(
      at top,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(0, 0, 0, 0.08) 63%
    );
  background-blend-mode: multiply, screen;

  display: grid;
  grid-template-areas:
    "title title"
    "actions self";
`;
