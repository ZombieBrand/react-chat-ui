import React from "react";
import NoteCard from ".";
import noteData from "data/notes";
export default {
  title: "UI 组件/NoteCard",
  component: NoteCard,
};

export const Default = () => <NoteCard note={noteData[0]}/>;
