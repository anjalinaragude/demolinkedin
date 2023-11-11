import {createSlice } from "@reduxjs/toolkit";


const initialState = {
  isLoggedIn: false,
  userData: null
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setLoginData: (state, { payload }) => {
      state.userData = payload;
      if(payload){
        state.isLoggedIn = true;
      }
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.userData = null;
      window.location.href = "/";
      localStorage.removeItem("signin")
    }
  },
  extraReducers: {}
});

export const { setLoginData, logout } = userSlice.actions;

export default userSlice.reducer;
