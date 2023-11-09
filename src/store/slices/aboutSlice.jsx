import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  about: " hi , My Name is Anjali"
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setAbout: (state, action) => {
      state.about = action.payload;
    }
  }
});

export const { setAbout } = aboutSlice.actions;

export default aboutSlice.reducer;
