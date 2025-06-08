// store/index.js
import { configureStore } from "@reduxjs/toolkit";
import logReducer from "./logSlice"

export const store = configureStore({
  reducer: {
    log: logReducer
  }
});
