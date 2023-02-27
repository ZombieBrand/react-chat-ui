import React from "react";
import PropTypes from "prop-types";
import { StyledNoteList, Notes } from "./style";
import FilterList from "components/FilterList";
import NoteCard from "components/NoteCard";
import noteData from "data/notes";
import { animated } from "react-spring";
import useStaggeredList from "hooks/useStaggeredList";

function NoteList(props) {
  const { children, ...rest } = props;
  const trailAnimes = useStaggeredList(noteData.length);
  return (
    <StyledNoteList {...rest}>
      <FilterList
        options={["最新笔记优先", "有改动的优先"]}
        actionLabel="添加笔记"
      >
        <Notes>
          {noteData.map((note, i) => (
            <animated.div key={i} style={trailAnimes[i]}>
              <NoteCard key={note.id} note={note} />
            </animated.div>
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
