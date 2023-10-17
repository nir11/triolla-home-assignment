import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};

export const noteSlice = createSlice({
  name: "note",
  initialState,
  reducers: {
    updateNotes: (state, action) => {
      state.notes = action.payload;
    },
  },
});

export const { updateNotes } = noteSlice.actions;

export default noteSlice.reducer;
