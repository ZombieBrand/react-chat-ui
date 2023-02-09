import VoiceMessage from "components/VoiceMessage";
import React from "react";
import ChatBubble from ".";

export default {
  title: "UI 组件/ChatBubble",
  component: ChatBubble,
  decorators: [(storyFn) => <div style={{ padding: "24px" }}>{storyFn()}</div>],
};

export const FromOthers = () => (
  <ChatBubble time="今天 下午4:20">这是其他人发送的消息</ChatBubble>
);

export const Mine = () => (
  <ChatBubble type="mine" time="昨天 上午9:11">
    这是我发送的消息内容!
  </ChatBubble>
);

export const VoiceMessageType = () => (
  <ChatBubble time="昨天 下午18：30">
    <VoiceMessage time="01:24" />
  </ChatBubble>
);

export const VoiceMessageTypeMine = () => (
  <ChatBubble type="mine" time="昨天 下午18：30">
    <VoiceMessage type="mine" time="01:24" />
  </ChatBubble>
);
