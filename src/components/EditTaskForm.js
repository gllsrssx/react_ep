import React, { useState, useEffect } from 'react';

function EditTaskForm({ task, onUpdate }) {
  const [name, setName] = useState('');

  useEffect(() => {
    setName(task.name);
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...task, name });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      <button type="submit">Update taak</button>
    </form>
  );
}

export default EditTaskForm;