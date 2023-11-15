import React, { useState } from 'react';

function AddTaskForm({ onAdd }) {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(name);
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <button type="submit">Voeg taak toe</button>
        </form>
    );
}

export default AddTaskForm;