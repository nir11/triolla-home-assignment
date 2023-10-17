import mongoose, { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    note: { type: Schema.Types.ObjectId, ref: "Note" },
    text: { type: String, required: true, minLength: 2, maxLength: 200 },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);
export default Comment;
