import React, { useState } from "react";
import { Task,TaskStatus } from "./task";

interface TaskFormProps {
  onAdd: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isImportant, setIsImportant] = useState<boolean>(false);
  const [status, setStatus] = useState<TaskStatus>(TaskStatus.Pending);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      isImportant,
      status,
    };
    onAdd(newTask);
    setTitle("");
    setDescription("");
    setIsImportant(false);
    setStatus(TaskStatus.Pending);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <br />
      <textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
      <br />
      <label>
        <input type="checkbox" checked={isImportant} onChange={e => setIsImportant(e.target.checked)} />
        Important
      </label>
      <br />
      <select value={status} onChange={e => setStatus(e.target.value as TaskStatus)}>
        {Object.values(TaskStatus).map(status => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>
      <br />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
