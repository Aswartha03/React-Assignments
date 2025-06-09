import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import { Task } from "./task";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks(prev => [...prev, task]);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>📝 Task Manager</h1>
      <TaskForm onAdd={addTask} />
      <hr />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
