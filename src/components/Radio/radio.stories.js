import React from "react";
import Radio from ".";

export default {
  title: "UI 组件/Radio",
  component: Radio,
};

export const Default = () => <Radio>选项</Radio>;

export const RadioGroup = () => (
  <Radio.Group label="单选框组">
    <Radio>选项一</Radio>
    <Radio>选项二</Radio>
    <Radio>选项三</Radio>
  </Radio.Group>
);
