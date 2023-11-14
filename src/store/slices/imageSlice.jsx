import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  img: null,
  backgroundImg:null
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
    setBackgroundImg: (state, action) => {
      state.backgroundImg = action.payload;
    },
    clearBackgroundImg: (state) => {
      state.backgroundImg = null; 
    },
    
  },
});

export const { setImg, clearImg,setBackgroundImg, clearBackgroundImg } = profilePhotoSlice.actions;
export default profilePhotoSlice.reducer;
