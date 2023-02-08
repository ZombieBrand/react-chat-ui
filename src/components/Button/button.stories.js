import React from "react";
import Button from ".";
import { ReactComponent as Plus } from "assets/icons/plus.svg";
import Icon from "components/Icon";
export default {
  title: "UI 组件/Button",
  component: Button,
};

export const RectDefault = () => <Button shape="rect">默认按钮</Button>;
export const CircleDefault = () => (
  <Button shape="circle">
    <Icon icon={Plus} width={12} height={12}></Icon>
  </Button>
);
