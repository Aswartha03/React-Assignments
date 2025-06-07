import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
let store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
export {store}