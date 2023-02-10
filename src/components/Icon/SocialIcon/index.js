import React from "react";
import PropTypes from "prop-types";
import Button from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SocialIcon(props) {
  const { icon, bgColor, href, ...rest } = props;
  return (
    <Button
      size="30px"
      bgColor={bgColor}
      onClick={() => href && window.open(href, "_blank")}
      {...rest}
    >
      <FontAwesomeIcon
        icon={icon}
        style={{ fontSize: "16px" }}
      ></FontAwesomeIcon>
    </Button>
  );
}

SocialIcon.propTypes = {
  icon: PropTypes.object,
  bgColor: PropTypes.string,
  href: PropTypes.string,
};

export default SocialIcon;
