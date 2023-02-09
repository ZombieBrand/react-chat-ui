import Button from "components/Button";
import React from "react";
import Popover from ".";

export default {
  title: "UI 组件/Popover",
  component: Popover,
  decorators: [(storyFn) => <div style={{ padding: "60px" }}>{storyFn()}</div>],
};

export const Default = () => (
  <Popover content="Hello!">
    <Button shape="rect">点我</Button>
  </Popover>
);

export const WithOffset = () => (
  <Popover offset={{ x: "-25%" }} content={"Hello!"}>
    <Button shape="rect">点我</Button>
  </Popover>
);
