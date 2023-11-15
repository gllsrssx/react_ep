import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
    return (
        <div>
            <input type="checkbox" checked={task.completed} onChange={onToggle} />
            <label>{task.name}</label>
            <button onClick={onDelete}>Verwijder</button>
        </div>
    );
}

export default TaskItem;