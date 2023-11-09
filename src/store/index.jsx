import { configureStore } from '@reduxjs/toolkit';
import skillReducer from '../store/slices/skillSlice';
import experienceReducer from "../store/slices/experienceSlice";
import aboutReducer from "../store/slices/aboutSlice";
import profilePhotoReducer from "../store/slices/imageSlice";

const store = configureStore({
  reducer: {
    skills: skillReducer,
    experience: experienceReducer,
    about: aboutReducer,
    profilePhoto: profilePhotoReducer,

    // Add other reducers if any
  },
});

export default store;
