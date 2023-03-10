import styled from "styled-components";
import Paragraph from "components/Paragraph";
import { card } from "utils/mixins";
import { StyledAvatar } from "components/Avatar/style";

export const Name = styled(Paragraph).attrs({ size: "large" })`
  grid-area: name;
`;

export const Intro = styled(Paragraph).attrs({ type: "secondary" })`
  grid-area: intro;
`;

export const StyledContactCard = styled.div`
  ${card()}
  display: grid;
  grid-template-areas:
    "avatar name"
    "avatar intro";
  grid-template-columns: 62px auto;

  ${StyledAvatar} {
    grid-area: avatar;
  }
`;
