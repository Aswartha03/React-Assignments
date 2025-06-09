import React from "react";
import { Task } from "./task";

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  if (tasks.length === 0) return <p>No tasks found.</p>;

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} style={{ marginBottom: "1rem", border: "1px solid gray", padding: "10px" }}>
          <h3>{task.title} {task.isImportant && <strong>🔥</strong>}</h3>
          <p>{task.description}</p>
          <p>Status: <em>{task.status}</em></p>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
