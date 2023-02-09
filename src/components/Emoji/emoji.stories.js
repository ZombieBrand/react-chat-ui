import React from "react";
import Emoji from ".";

export default {
  title: "UI 组件/Emoji",
  component: Emoji
};

export const Default = () => <div>
  <Emoji label="ghost" size="30px">👻</Emoji>
  <Emoji label="joker" size="20px">🤡</Emoji>
  <Emoji label="robot">🤖</Emoji>
</div>