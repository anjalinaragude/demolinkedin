import { createSlice } from '@reduxjs/toolkit';

const skillSlice = createSlice({
  name: 'skills',
  initialState: {
    list: ["html", "css", "javascript"],
  },
  reducers: {
    addSkill: (state, action) => {
      state.list.push(action.payload);
    },
    editSkill: (state, action) => {
      state.list[action.payload.index] = action.payload.skill;
    },
    deleteSkill: (state, action) => {
      state.list.splice(action.payload, 1);
    },
  },
});

export const { addSkill, editSkill, deleteSkill } = skillSlice.actions;
export default skillSlice.reducer;
