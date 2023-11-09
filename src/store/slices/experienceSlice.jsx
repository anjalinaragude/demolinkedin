import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  position: "",
  company: "",
  location: "",
  startDate: "",
  endDate: "",
  experiences: [], // Array to hold all experiences
  editIndex: null,
  editPopup: false,
  buttonPopup: false
};

const experienceSlice = createSlice({
  name: "experience",
  initialState,
  reducers: {
    setPosition(state, action) {
      state.position = action.payload;
    },
    setCompany(state, action) {
      state.company = action.payload;
    },
    setLocation(state, action) {
      state.location = action.payload;
    },
    setStartDate(state, action) {
      state.startDate = action.payload;
    },
    setEndDate(state, action) {
      state.endDate = action.payload;
    },
    addExperience(state, action) {
      const {
        position,
        company,
        location,
        startDate,
        endDate
      } = action.payload;
      state.experiences.push({
        position,
        company,
        location,
        startDate,
        endDate
      });
    },

    editExperience(state, action) {
      const { index, data } = action.payload;
      state.experiences[index] = data;
    },
    deleteExperience(state, action) {
      state.experiences = state.experiences.filter(
        (_, index) => index !== action.payload
      );
    },
    resetFields(state) {
      state.position = "";
      state.company = "";
      state.location = "";
      state.startDate = "";
      state.endDate = "";
    },
    setEditIndex(state, action) {
      state.editIndex = action.payload;
    },
    setEditPopup(state, action) {
      state.editPopup = action.payload;
    },
    setButtonPopup(state, action) {
      state.buttonPopup = action.payload;
    }
  }
});

export const {
  setPosition,
  setCompany,
  setLocation,
  setStartDate,
  setEndDate,
  addExperience,
  editExperience,
  deleteExperience,
  resetFields,
  setEditIndex,
  setEditPopup,
  setButtonPopup
} = experienceSlice.actions;

export default experienceSlice.reducer;
