import React from "react";
import Icon from ".";
import { ReactComponent as SmileIcon } from "assets/icons/smile.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";

export default {
  title: "Design System/Icon",
  component: Icon,
};

export const Default = () => <Icon icon={SmileIcon}></Icon>;

export const CustomColor = () => <Icon icon={SmileIcon} color="red"></Icon>;

export const Size = () => (
  <Icon icon={SmileIcon} color="blue" width={48} height={48}></Icon>
);

export const FontAwesome = () => (
  <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>
);

export const FontAwesomeStyle = () => (
  <FontAwesomeIcon
    icon={faCommentDots}
    style={{ color: "red", opacity: 0.2, fontSize: "68px" }}
  ></FontAwesomeIcon>
);
