import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  img: null,
};

// Slice
const profilePhotoSlice = createSlice({
  name: "profilePhoto",
  initialState,
  reducers: {
    setImg(state, action) {
      state.img = action.payload;
    },
    clearImg(state) {
      state.img = null;
    },
    // Other actions related to the profile photo can be defined here
  },
});

export const { setImg, clearImg } = profilePhotoSlice.actions;
export default profilePhotoSlice.reducer;
