import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StatusIcon, StyledAvatar } from "components/Avatar/style";
import styled from "styled-components";
import { activeBar } from "utils/mixins";

export const StyledMenuItem = styled.div`
  & > a {
    width: 100%;
    height: 74px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${activeBar()}

  ${({ active }) => (active ? "" : `&:before,&:after {height:0}`)}

  &:hover {
    /* 指示条动画 */
    ::before,
    ::after {
      height: 100%;
    }

    /* 图标动画 */
    svg {
      transform: scale(1.2);
      opacity: 1;
    }
  }
`;

// 给react组件添加样式
export const MenuIcon = styled(FontAwesomeIcon)`
  color: white;
  font-size: 24px;
  opacity: ${({ active }) => (active ? 1 : 0.3)};

  transform: scale(1);
  transition: 0.4s;
`;

export const StyledNavBar = styled.nav`
  display: grid;
  grid-template-rows: 1fr 4fr;
  width: 100px;
  height: 100vh;
  background-color: ${({ theme }) => theme.darkPurple};
  padding: 30px 0;

  ${StyledAvatar} {
    justify-self: center;
    ${StatusIcon} {
      &::before {
        background-color: ${({ theme }) => theme.darkPurple};
      }
    }
  }
`;
export const MenuItems = styled.div`
  display: grid;
  grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;
`;
