import React from "react";
import PropTypes from "prop-types";
import { AvatarClip, AvatarImage, StatusIcon, StyledAvatar } from "./style";

function Avatar(props) {
  const { src, size = "48px", status, statusIconSize = "8px", ...rest } = props;
  return (
    <StyledAvatar {...rest}>
      {status && (
        <StatusIcon status={status} size={statusIconSize}></StatusIcon>
      )}
      <AvatarClip size={size}>
        <AvatarImage src={src} alt="AvatarImage" />
      </AvatarClip>
    </StyledAvatar>
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  status: PropTypes.oneOf(["online", "offline"]),
  statusIconSize: PropTypes.string,
};

export default Avatar;
