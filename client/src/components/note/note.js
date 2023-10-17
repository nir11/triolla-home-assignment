import React from "react";
import { ReactComponent as TrashIcon } from "../../assets/trash.svg";
import "./note.scss";

export const Note = ({ note, isSelected, setSelectedNote }) => {
  return (
    <div
      className={"note-container" + (isSelected ? " selected" : "")}
      onClick={() => setSelectedNote(note)}
    >
      <div className="title">{note.title}</div>
      <TrashIcon className="trash-button" />
    </div>
  );
};
