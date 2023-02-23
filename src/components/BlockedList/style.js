import styled from "styled-components";
import StyledText from "components/Text/style";
import Avatar from "components/Avatar";
import Text from "components/Text";
import Icon from "components/Icon";

export const BlockedAvatar = styled(Avatar)`
  grid-area: avatar;
`;

export const BlockedName = styled(Text).attrs({ size: "xlarge" })`
  grid-area: name;
  margin-top: 20px;
`;

export const CloseIcon = styled(Icon)`
  grid-area: 2 / 3 / 5 / 4;
  z-index: 10;
  margin-top: 10px;
`;

export const ClosableAvatar = styled.div`
  display: grid;
  grid-template-areas:
    "avatar avatar avatar"
    "avatar avatar avatar"
    "avatar avatar avatar"
    "name name name";

  justify-items: center;
`;

export const SettingsMenu = styled.div`
  height: 148px;
  display: grid;
  grid-template-columns: 10px 1fr;
  align-items: center;

  ${StyledText} {
    grid-column: span 1/-1;
    justify-self: center;
  }
`;

export const FriendList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  row-gap: 24px;
  justify-items: center;
`;

export const StyledBlockedList = styled.div`
  padding: 2vh 4vw;
`;