import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateNotes } from "../../store/note/note-slice";
import api from "../../utils/api";
import { toast } from "react-toastify";
import "./create-note.scss";

export const CreateNote = () => {
  const notes = useSelector((state) => state.noteReducer.notes);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [newNote, setNewNote] = useState({
    title: "",
    content: "some content",
  });

  const handleChange = (e) => {
    setNewNote((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const validations = () => {
    const { title } = newNote;
    if (!/^[a-zA-Z0-9\s]*$/.test(title)) {
      toast("Title must contain only alphanumeric characters");
      return false;
    }
    if (title.length < 2) {
      toast("Title length must be above 2 characters");
      return false;
    }
    if (title.length > 200) {
      toast("Title must contain only alphanumeric characters");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validations()) return;

    try {
      const res = await api.post("notes", newNote);
      if (res) {
        const newNote = res.data.newNote;
        dispatch(updateNotes([...notes, newNote]));
        navigate("../");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="create-note-container">
      <div className="form-container">
        <div className="form-title">Create New Note</div>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" name="title" onChange={handleChange} />
          <button className="create-button" type="submit">
            Create
          </button>
          <button className="cancel-button" onClick={() => navigate("../")}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};
