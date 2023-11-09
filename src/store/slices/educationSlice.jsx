import { createSlice } from "@reduxjs/toolkit";

const educationSlice = createSlice({
  name: "educations",
  initialState: {
    list: [],
  },
  reducers: {
    addEducation: (state, action) => {
      state.list.push(action.payload);
    },
    deleteEducation: (state, action) => {
      state.list.splice(action.payload, 1);
    },
    editEducation: (state, action) => {
      state.list[action.payload.index] = action.payload.education;
    },
  },
});

export const { addEducation, deleteEducation, editEducation } = educationSlice.actions;

export default educationSlice.reducer;
