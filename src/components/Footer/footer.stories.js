import React from "react";
import Footer from ".";

export default {
  title: "页面组件/Footer",
  component: Footer,
  decorators: [(storyFn) => <div style={{ padding: "40px" }}>{storyFn()}</div>],
};

export const Default = () => <Footer></Footer>;