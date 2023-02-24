import React from "react";
import PropTypes from "prop-types";
import {
  StyledNoteCard,
  NoteExcerpt,
  NoteImage,
  NotePublishTime,
  NoteTitle,
} from "./style";

function NoteCard(props) {
  const { note, children, ...rest } = props;
  return (
    <StyledNoteCard {...rest}>
      <NoteImage src={note.image} />
      <NoteTitle>{note.title}</NoteTitle>
      <NoteExcerpt>{note.excerpt}</NoteExcerpt>
      <NotePublishTime>{note.publishedAt}</NotePublishTime>
    </StyledNoteCard>
  );
}

NoteCard.propTypes = {
  children: PropTypes.any,
};

export default NoteCard;
