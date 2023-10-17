import React from "react";
import "./comment-modal.scss";

export const CommentModal = ({ close, noteId }) => {
  return (
    <div className="comment-modal-container">
      <div className="modal">
        <div className="title">Comments</div>
        <input type="text" placeholder="Comment" />
        <div className="buttons-container">
          <button>Save</button>
          <button onClick={close}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
