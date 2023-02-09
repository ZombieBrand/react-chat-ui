import React from "react";
import VoiceMessage from ".";

export default {
  title: "UI 组件/VoiceMessage",
  component: VoiceMessage,
};

export const Default = () => <VoiceMessage time="01:22"></VoiceMessage>;
export const Mine= () => <VoiceMessage type="mine" time="01:22"></VoiceMessage>;
Mine.parameters = {
  backgrounds: { default: 'dark' },
}