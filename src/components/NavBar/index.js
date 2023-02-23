import React from "react";
import PropTypes from "prop-types";
import { MenuIcon, MenuItems, StyledMenuItem, StyledNavBar } from "./style";
import Badge from "components/Badge";
import Avatar from "components/Avatar";
import profileImage from "assets/images/face-male-1.jpg";
import {
  faCommentDots,
  faUsers,
  faFolder,
  faStickyNote,
  faEllipsisH,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import "styled-components/macro"

function NavBar(props) {
  const { ...rest } = props;
  return (
    <StyledNavBar {...rest}>
      <Avatar src={profileImage} status="online" />
      <MenuItems>
        <MenuItem to="/" showBadge icon={faCommentDots} />
        <MenuItem to="/contacts" icon={faUsers} />
        <MenuItem to="/files" icon={faFolder} />
        <MenuItem to="/notes" icon={faStickyNote} />
        <MenuItem icon={faEllipsisH} />
        <MenuItem
          to="/settings"
          icon={faCog}
          css={`
            align-self: end;
          `}
        />
      </MenuItems>
    </StyledNavBar>
  );
}

function MenuItem(props) {
  const { icon, active, showBadge, ...rest } = props;
  console.log({ props });
  return (
    <StyledMenuItem active={active} {...rest}>
      <a href="#">
        <Badge show={showBadge}>
          <MenuIcon icon={icon} active={active.toString()}></MenuIcon>
        </Badge>
      </a>
    </StyledMenuItem>
  );
}

NavBar.propTypes = {
  children: PropTypes.any,
};

MenuItem.propTypes = {
  icon: PropTypes.any,
  active: PropTypes.bool,
  showBadge: PropTypes.bool,
};
export default NavBar;

export { MenuItem };
