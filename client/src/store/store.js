import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "./note/note-slice.js";

export const store = configureStore({
  reducer: {
    noteReducer,
  },
});
