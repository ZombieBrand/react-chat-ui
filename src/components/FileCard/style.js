import styled from "styled-components";
import Icon from "components/Icon";
import Heading from "components/Heading";
import Paragraph from "components/Paragraph";
import Popover from "components/Popover";
import { card } from "utils/mixins";

export const FileIcon = styled(Icon).attrs({
  width: 60,
  height: 60,
})`
  grid-area: icon;
  justify-self: start;
`;

export const FileName = styled(Heading).attrs({ level: 2 })`
  grid-area: name;
  align-self: center;
`;

export const FileSize = styled(Paragraph).attrs({ type: "secondary" })`
  grid-area: size;
`;

export const Options = styled(Popover)`
  grid-area: options;
  justify-self: end;
  align-self: center;
`;
export const Time = styled(Paragraph).attrs({ type: "secondary" })`
  grid-area: time;
  justify-self: end;
`;

export const StyledFileCard = styled.div`
  ${card()}
  display: grid;
  grid-template-areas:
    "icon name options"
    "icon size time";
  grid-template-columns: 74px 1fr 1fr;
`;