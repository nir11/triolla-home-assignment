import React from "react";
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as TrashIcon } from "../../assets/trash.svg";
import "./comment.scss";

export const Comment = ({ index, text }) => {
  return (
    <div className="comment-container">
      <div className="text">
        {index}. {text}
      </div>
      <div className="buttons-container">
        <EditIcon className="button" />
        <TrashIcon className="button" />
      </div>
    </div>
  );
};
