import React from "react";
import Heading from ".";

export default {
  title: "排版/Heading",
  component: Heading,
};

export const H1 = () => <Heading level={1}>这是标题h1</Heading>;
export const H2 = () => <Heading level={2}>这是标题h2</Heading>;
export const H3 = () => <Heading level={3}>这是标题h3</Heading>;
export const H4 = () => <Heading level={4}>这是标题h4</Heading>;
export const H5 = () => <Heading level={5}>这是标题h5</Heading>;
export const H6 = () => <Heading level={6}>这是标题h6</Heading>;
