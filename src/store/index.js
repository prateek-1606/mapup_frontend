import { configureStore } from "@reduxjs/toolkit";
import CountrySlice from "./country";
const reducer = {
  country: CountrySlice.reducer,
};
const store = configureStore({ reducer });
export default store;
