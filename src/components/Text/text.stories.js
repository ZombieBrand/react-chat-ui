import React from "react";
import Text from ".";

export default {
  title: "排版/Text",
  component: Text,
};

export const Default = () => <Text>默认</Text>;
export const Secondary = () => <Text type="secondary">次要文本</Text>;
export const Medium = () => <Text size="medium">中等文本</Text>;
export const LargeBold = () => (
  <Text size="large" bold={true}>
    大号文本,加粗
  </Text>
);
