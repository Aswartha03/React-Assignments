import React from 'react';
import useToggleItems from './hooks/useToggleItems';

function App() {
  const [state, toggleState] = useToggleItems(["A", "B", "C"], 1); // starts at "B"

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Current State: {state}</h1>
      <button onClick={toggleState}>Toggle</button>
    </div>
  );
}

export default App;
