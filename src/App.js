import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';

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
      <Header />
      <AddTaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
      <Footer />
    </div>
  );
}

export default App;