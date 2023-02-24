import React from "react";
import PropTypes from "prop-types";
import {StyledNoteList, Notes } from "./style";
import FilterList from "components/FilterList";
import NoteCard from "components/NoteCard";
import noteData from "data/notes";

function NoteList({ children, ...rest }) {
  return (
    <StyledNoteList {...rest}>
      <FilterList
        options={["最新笔记优先", "有改动的优先"]}
        actionLabel="添加笔记"
      >
        <Notes>
          {noteData.map((note, i) => (
            <NoteCard key={note.id} note={note} />
          ))}
        </Notes>
      </FilterList>
    </StyledNoteList>
  );
}

NoteList.propTypes = {
  children: PropTypes.any,
};

export default NoteList;
