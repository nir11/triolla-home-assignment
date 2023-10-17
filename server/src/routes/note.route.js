import express from "express";
import Note from "../schemas/note.model.js";
import Comment from "../schemas/comment.model.js";
import { newNoteSchema } from "../utils/validations/new-note.js";

const noteRouter = express.Router();

noteRouter.get("/", async (req, res) => {
  try {
    const notes = await Note.find().lean();
    const payload = [];
    if (!notes) {
      return res.status(404).send({ message: "Notes not found" });
    }
    for (const note of notes) {
      const noteComments = await Comment.find({ note: note._id });
      payload.push({
        ...note,
        comments: noteComments?.length > 0 ? noteComments : [],
      });
    }
    setTimeout(() => {
      res.send({ notes: payload });
    }, 1000);
  } catch (err) {
    res.status(400).send({ message: "Something went wrong" });
  }
});

noteRouter.post("/", async (req, res) => {
  try {
    // Validations
    const result = newNoteSchema.parse(req.body);

    const { title, content } = result;
    const noteExist = await Note.findOne({ title });
    if (noteExist) {
      return res.status(404).send({ message: "Note already exists" });
    }
    const newNote = new Note({
      title,
      content,
    });
    await newNote.save();
    res.send({ newNote });
  } catch (err) {
    res.status(400).send({ message: "Something went wrong" });
  }
});

export default noteRouter;
