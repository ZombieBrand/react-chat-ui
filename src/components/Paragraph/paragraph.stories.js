import React from "react";
import Paragraph from ".";

export default {
  title: "排版/Paragraph",
  component: Paragraph,
};

export const Default = () => (
  <>
    <Paragraph>这是一个段落</Paragraph>
    <Paragraph size="medium" type="primary">
      这是一个段落
    </Paragraph>
    <Paragraph size="large" type="danger" bold>
      这是一个段落
    </Paragraph>
  </>
);

export const Ellipsis = () => (
  <Paragraph ellipsis>
    这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落这是一个很长的段落
  </Paragraph>
);
