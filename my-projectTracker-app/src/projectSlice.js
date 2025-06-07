import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const projectSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    addProject: (state, action) => {
      state.push({ id: Date.now(), name: action.payload, tasks: [] });
    },
    deleteProject: (state, action) => {
      return state.filter(p => p.id !== action.payload);
    },
    addTask: (state, action) => {
      const { projectId, text } = action.payload;
      const project = state.find(p => p.id === projectId);
      if (project) {
        project.tasks.push({ id: Date.now(), text, completed: false });
      }
    },
    deleteTask: (state, action) => {
      const { projectId, taskId } = action.payload;
      const project = state.find(p => p.id === projectId);
      if (project) {
        project.tasks = project.tasks.filter(t => t.id !== taskId);
      }
    },
    toggleTask: (state, action) => {
      const { projectId, taskId } = action.payload;
      const project = state.find(p => p.id === projectId);
      if (project) {
        const task = project.tasks.find(t => t.id === taskId);
        if (task) task.completed = !task.completed;
      }
    },
  },
});

export const { addProject, deleteProject, addTask, deleteTask, toggleTask } = projectSlice.actions;
export default projectSlice.reducer;
