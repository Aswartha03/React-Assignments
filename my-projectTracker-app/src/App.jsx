import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProject,
  deleteProject,
  addTask,
  deleteTask,
  toggleTask,
} from './projectSlice';

function App() {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.projects);
  const [projectName, setProjectName] = useState('');
  const [taskInputs, setTaskInputs] = useState({}); // projectId: taskText

  const handleAddProject = () => {
    if (projectName.trim()) {
      dispatch(addProject(projectName));
      setProjectName('');
    }
  };

  const handleAddTask = (projectId) => {
    const text = taskInputs[projectId]?.trim();
    if (text) {
      dispatch(addTask({ projectId, text }));
      setTaskInputs({ ...taskInputs, [projectId]: '' });
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>📌 Project Tracker</h1>

      <input
        value={projectName}
        placeholder="New Project Name"
        onChange={e => setProjectName(e.target.value)}
      />
      <button onClick={handleAddProject}>Add Project</button>

      {projects.map(project => (
        <div key={project.id} style={{ marginTop: 20, border: '1px solid gray', padding: 10 }}>
          <h2>
            {project.name}
            <button
              onClick={() => dispatch(deleteProject(project.id))}
              style={{ marginLeft: 10 }}
            >❌</button>
          </h2>

          <ul>
            {project.tasks.map(task => (
              <li key={task.id}>
                <span
                  onClick={() => dispatch(toggleTask({ projectId: project.id, taskId: task.id }))}
                  style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    cursor: 'pointer',
                  }}
                >
                  {task.text}
                </span>
                <button
                  onClick={() => dispatch(deleteTask({ projectId: project.id, taskId: task.id }))}
                  style={{ marginLeft: 10 }}
                >Delete</button>
              </li>
            ))}
          </ul>

          <input
            value={taskInputs[project.id] || ''}
            placeholder="New Task"
            onChange={e => setTaskInputs({ ...taskInputs, [project.id]: e.target.value })}
          />
          <button onClick={() => handleAddTask(project.id)}>Add Task</button>
        </div>
      ))}
    </div>
  );
}

export default App;
