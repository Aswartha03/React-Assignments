// store/slices/logSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  logs: [],
  studyTime: 0,
  mood: 5,
  sleep: 7,
  notes: "",
};

const logSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    setStudyTime: (state, action) => { state.studyTime = action.payload },
    setMood: (state, action) => { state.mood = action.payload },
    setSleep: (state, action) => { state.sleep = action.payload },
    setNotes: (state, action) => { state.notes = action.payload },
    saveLog: (state, action) => {
      const log = action.payload;
      const filtered = state.logs.filter((l) => l.date !== log.date);
      const newLogs = [...filtered, log];
      state.logs = newLogs;
      localStorage.setItem("studyLogs", JSON.stringify(newLogs));
      state.studyTime = 0;
      state.mood = 5;
      state.sleep = 7;
      state.notes = "";
    },
    loadLogs: (state) => {
      const stored = JSON.parse(localStorage.getItem("studyLogs")) || [];
      state.logs = stored;
    }
  }
});

export const {
  setStudyTime, setMood, setSleep, setNotes, saveLog, loadLogs
} = logSlice.actions;

export default logSlice.reducer;
