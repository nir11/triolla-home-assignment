import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import noteRouter from "./routes/note.route.js";
dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/notes", noteRouter);

mongoose
  .connect(`${process.env.MONGO_URI}/triolla`)
  .then(() => console.log("Connected to Database!"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

export default app;
