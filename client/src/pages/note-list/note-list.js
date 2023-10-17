import React, { useEffect, useState } from "react";
import { updateNotes } from "../../store/note/note-slice";
import api from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import { Note } from "../../components/note/note";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import { CommentModal } from "../../components/comment-modal/comment-modal";
import { Comment } from "../../components/comment/comment";
import "./note-list.scss";

export const NoteList = () => {
  const notes = useSelector((state) => state.noteReducer.notes);
  const [isLoading, setIsLoading] = useState(true);
  const [showNewCommentModal, setShowNewCommentModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getNotes = async () => {
      try {
        const res = await api.get("notes");
        if (res) {
          const notesDB = res.data.notes;
          dispatch(updateNotes(notesDB));
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getNotes();
  }, []);
  return (
    <div className="note-list-conatiner">
      {showNewCommentModal && (
        <CommentModal
          close={() => setShowNewCommentModal(false)}
          noteId={selectedNote._id}
        />
      )}

      <div className="left">
        {isLoading ? (
          <FontAwesomeIcon
            className="loading-spinner"
            icon={faSpinner}
            spin={true}
          />
        ) : (
          <div className="notes">
            {notes.map((note) => {
              return (
                <Note
                  key={note._id}
                  note={note}
                  isSelected={selectedNote?._id === note._id}
                  setSelectedNote={setSelectedNote}
                />
              );
            })}
          </div>
        )}

        <button
          className="create-new-note-button"
          onClick={() => navigate("/new-note")}
        >
          Create New Note
        </button>
      </div>
      <div className="right">
        <div className="comments-container">
          {!isLoading &&
            Object.keys(selectedNote).length !== 0 &&
            selectedNote.comments.map((comment, i) => {
              return (
                <Comment key={comment._id} index={i + 1} text={comment.text} />
              );
            })}

          {/* HARD CODED EXAMPLE */}
          {!isLoading && (
            <>
              <Comment key={1} index={1} text="Comment 1" />
              <Comment key={2} index={2} text="Comment 2" />
              <Comment key={3} index={3} text="Comment 3" />
            </>
          )}
        </div>
        <PlusIcon
          className="plus-button"
          onClick={() => setShowNewCommentModal(true)}
        />
      </div>
    </div>
  );
};
