import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
  {
    title: { type: String, required: true, minLength: 2, maxLength: 200 },
    content: { type: String, required: true, minLength: 2, maxLength: 200 },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);
export default Note;
