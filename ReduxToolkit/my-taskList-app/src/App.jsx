import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, removeTask, toggleTask } from './taskSlice';

function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks);

  const handleAdd = () => {
    if (input.trim() !== '') {
      dispatch(addTask(input));
      setInput('');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>📝 Task List</h2>
      <input
        type="text"
        value={input}
        placeholder="Enter a task"
        onChange={e => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id} style={{ margin: '10px 0' }}>
            <span
              onClick={() => dispatch(toggleTask(task.id))}
              style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                marginRight: '10px'
              }}
            >
              {task.text}
            </span>
            <button onClick={() => dispatch(removeTask(task.id))}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
