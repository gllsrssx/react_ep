import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAdd = (name) => {
    setTasks([...tasks, { id: Date.now(), name, completed: false }]);
  };

  const handleToggle = (task) => {
    setTasks(tasks.map(t => t.id === task.id ? { ...t, completed: !t.completed } : t));
  };

  const handleDelete = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id));
  };

  return (
    <div>
      
    </div>
  );
}

export default App;