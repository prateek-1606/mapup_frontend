import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: {},
  location: { lat: 28.7041, lng: 77.1025 },
  countrySelected: false,
  darkMode: false,
};
const countryDetailsSlice = createSlice({
  name: "indice stocks",
  initialState,
  reducers: {
    setCountryDetails(state, action) {
      return {
        ...state,
        location: action.payload.location,
        data: action.payload.detail,
        countrySelected: true,
      };
    },
    setDarkMode(state, action) {
      return {
        ...state,
        darkMode: action.payload,
      };
    },
  },
});
export const countryDetails = countryDetailsSlice.actions;
export default countryDetailsSlice;
