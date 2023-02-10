import React from "react";
import Seperator from ".";

export default {
  title: "UI 组件/Seperator",
  component: Seperator,
  decorators: [(storyFn) => <div style={{ padding: "24px" }}>{storyFn()}</div>],
};

export const Default = () => <Seperator></Seperator>;
